const { src, dest } = require("gulp");

// конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// плагин
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");

// обработка HTML
const html = () => {
   return src(path.html.src)
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(fileInclude())
      .pipe(webpHtml())
      .pipe(size({ title: "Before compression" }))
      .pipe(htmlMin(app.htmlMin))
      .pipe(size({ title: "After compression" }))
      .pipe(dest(path.html.dest));
}

module.exports = html;
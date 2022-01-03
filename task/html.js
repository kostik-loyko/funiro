import gulp from "gulp";

// конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// плагин
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import htmlMin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";

// обработка HTML
export default () => {
   return gulp.src(path.html.src)
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(fileInclude())
      .pipe(webpHtml())
      .pipe(size({ title: "Before compression" }))
      .pipe(htmlMin(app.htmlMin))
      .pipe(size({ title: "After compression" }))
      .pipe(gulp.dest(path.html.dest));
}
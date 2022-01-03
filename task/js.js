const { src, dest } = require("gulp");

// конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// плагин
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");
const { isDev } = require("../config/app.js");

// обработка Java Script
const js = () => {
   return src(path.js.src, { sourcemaps: isDev })
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(babel())
      .pipe(webpack(app.webpack))
      .pipe(dest(path.js.dest, { sourcemaps: isDev }));
}

module.exports = js;
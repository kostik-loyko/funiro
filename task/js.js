import gulp from "gulp";

// конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// плагин
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import isDev from "../config/app.js";

// обработка Java Script
export default () => {
   return gulp.src(path.js.src, { sourcemaps: isDev })
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(babel())
      .pipe(webpack(app.webpack))
      .pipe(gulp.dest(path.js.dest, { sourcemaps: isDev }));
}
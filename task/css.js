import gulp from "gulp";

// конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// плагин
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpCss from "gulp-webp-css";
import isDev from "../config/app.js";

// обработка CSS
export default () => {
   return gulp.src(path.css.src, { sourcemaps: isDev })
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(concat("main.css"))
      .pipe(cssimport())
      .pipe(webpCss())
      .pipe(autoprefixer())
      .pipe(groupCssMediaQueries())
      .pipe(size({ title: "main.css" }))
      .pipe(gulp.dest(path.css.dest, { sourcemaps: isDev }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(csso())
      .pipe(size({ title: "main.min.css" }))
      .pipe(gulp.dest(path.css.dest, { sourcemaps: isDev }));
}
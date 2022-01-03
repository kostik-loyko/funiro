import gulp from "gulp";

// конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// плагин
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sassGlob from "gulp-sass-glob";
import webpCss from "gulp-webp-css";
import isDev from "../config/app.js";

// обработка SCSS
export default () => {
   return gulp.src(path.scss.src, { sourcemaps: app.isDev })
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(webpCss())
      .pipe(autoprefixer())
      .pipe(groupCssMediaQueries())
      .pipe(size({ title: "main.css" }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(csso())
      .pipe(size({ title: "main.min.css" }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
}
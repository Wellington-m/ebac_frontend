const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const htmlmin = require("gulp-htmlmin");

function compileHTML() {
  return gulp
    .src("./source/index.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("build/"));
}

function compileSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass({ style: "compressed" }).on("Error", sass.logError))
    .pipe(gulp.dest("./build/style"));
}

exports.default = function () {
  gulp.watch(
    "./source/styles/**/*",
    { ignoreInitial: false },
    gulp.series(compileSass)
  );

  gulp.watch(
    "./source/index.html",
    { ignoreInitial: false },
    gulp.series(compileHTML)
  );
};

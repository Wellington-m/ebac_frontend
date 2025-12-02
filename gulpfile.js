const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function compileHTML() {
  return gulp.src("./source/index.html").pipe(gulp.dest("build/"));
}

function compileSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ style: "compressed" }).on("Error", sass.logError))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
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

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");

function compressImages() {
  return gulp
    .src("./source/assets/images/*", { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest("build/assets/images"));
}

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

  gulp.watch(
    "source/assets/images/*",
    { ignoreInitial: false },
    gulp.series(compressImages)
  );
};

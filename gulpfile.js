const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass({ style: "compressed" }).on("Error", sass.logError))
    .pipe(gulp.dest("./build/style"));
}

exports.compileSass = compileSass;

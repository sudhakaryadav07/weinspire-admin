const gulp = require("gulp");
const gap = require("gulp-append-prepend");

//compile scss into css
function style() {
  //1. where is my sass file going to be
  return gulp.src('./src/assets/scss/**/*.sass')
  //2. pass that file through sass compiler
  .pipe(sass())
  //3.Where do I save the compiled css
  .pipe(gulp.dest('./src/assets/css'))
}
exports.default = style
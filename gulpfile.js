const gulp = require("gulp");
const sass = require('gulp-sass');
 const gap = require("gulp-append-prepend");

 gulp.task('watch', function () {
  gulp.watch('./app/*.scss', gulp.series('sass'));
  gulp.watch('./app/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));
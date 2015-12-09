var gulp = require('gulp'),
  	connect = require('gulp-connect');
  	opn = require('opn')

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./src/css/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/css/*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);
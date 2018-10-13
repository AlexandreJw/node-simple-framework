const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['praise'], () =>
  gulp.watch(['src/**/*.js', '!src/pubilc/*/*.js'], ['praise'])
);

gulp.task('praise', () => {
  return gulp.src(['src/**/*.js', '!src/pubilc/*/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./build'))
});
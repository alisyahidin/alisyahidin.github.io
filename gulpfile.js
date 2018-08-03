const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

const dir = '.'

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: dir
    },
  })
})

gulp.task('sass', function() {
    return gulp.src(dir + '/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(dir + '/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync'], function (){
// gulp.task('watch', ['browserSync', 'sass'], function (){
  // gulp.watch(dir + '/scss/**/*.scss', ['sass'])

  gulp.watch(dir + '/*.html', browserSync.reload)
  gulp.watch(dir + '/css/*.css', browserSync.reload)
  gulp.watch(dir + '/js/*.js', browserSync.reload)
})
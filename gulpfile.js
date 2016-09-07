var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


//Compile Sass
gulp.task('styles', function(){
return gulp.src('./sass/**/*.scss')
.pipe(sass().on('error',sass.logError))
.pipe(gulp.dest('./css'))
.pipe(browserSync.stream());
});

gulp.task('browserSync', function(){
browserSync.init({
	server: {baseDir:'./'}
	});
});

//static Server
gulp.task('server', ['styles'], function(){
browserSync.init({
});

gulp.watch("./scss/*scss",['styles']);
gulp.watch("./*.html").on('change', browserSync.reload);

});

// watch task
gulp.task('default', ['serve']);
'use strict';

// Dependencies
// WHY GULP ?
// Sass is not readable in modern browsers, 
// so Gulp allows CSS to be written in a tree-type function 
// within CSS. Makes everything much more readable and efficient, as well as compile it/minify it

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


// SCSS/CSS - Input and output folders for CSS

var SCSS_SRC = './src/Assets/scss/**/*.scss'; //input
var SCSS_DEST = './src/Assets/css'; //output

//Compile SCSS
gulp.task('compile_scss', function() {

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

});

//detect changes in SCSS
gulp.task('watch_scss', function() {
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

// Run tasks
gulp.task('default', ['watch_scss']);
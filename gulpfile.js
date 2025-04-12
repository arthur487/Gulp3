const gulp = import('gulp');
const Sass = require('gulp-sass')(require('sass')); // Ensure to pass the compiler as argument
const uglify = import('gulp-uglify');
const image = import('gulp-imagemin');

function Compilesass() {
    return gulp.src('./source/styles/*.main.scss')
        .pipe(Sass())
        .pipe(gulp.dest('./build/styles/*.main.css'));
}

function Compilejs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
            .pipe(gulp.dest('./build/scripts'));
}

function compressImg() {
    return gulp.src('/sources/images/*')
        .pipe(image())
        .pipe(gulp.dest('./builds/images'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(Compilesass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(Compilejs));
    gulp.watch('./source/images/', { ignoreInitial: false }, gulp.series(compressImg));
}
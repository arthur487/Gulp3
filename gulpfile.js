const gulp = require('gulp');
const Sass = require('gulp-sass')(require('sass')); // Ensure to pass the compiler as argument
const uglify = require('gulp-uglify');
const image = require('gulp-imagemin');
const sourceMaps = require('gulp-sourcemaps')
const obfuscate = require("gulp-obfuscate")

function Comprimesass() {
    return gulp.src('./sources/styles/main.scss')
        .pipe(Sass({
            outputstyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles')).pipe(sourceMaps.write("./maps")).pipe(gulp.dest('./build/styles'));
}

function ComprimejavaScript() {
    return gulp.src('./sources/scripts/*.js')
        .pipe(uglify())
            .pipe(gulp.dest('./build/scripts'));
}

function ComprimeImages() {
    return gulp.src('./sources/images/*')
        .pipe(image())
        .pipe(gulp.dest('./build/images'));
}

exports.default = function() {
    gulp.watch('./sources/styles/*.scss', { ignoreInitial: false }, gulp.series(Comprimesass));
    gulp.watch('./sources/scripts/*.js', { ignoreInitial: false }, gulp.series(ComprimejavaScript));
    gulp.watch('./sources/images', { ignoreInitial: false }, gulp.series(ComprimeImages));
}
const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));

function compressaoSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({
        outputStyle: 'compressed' 
    }))
    .pipe(gulp.dest('./dist/styles'))
};

exports.default = gulp.parallel(compressaoSass);
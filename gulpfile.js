let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let autoprefixer = require('gulp-autoprefixer');
gulp.task('scss', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer({
                overrideBrowserslist: ['last 10 versions'],
                cascade: false
            }

        ))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.parallel('scss'))
})
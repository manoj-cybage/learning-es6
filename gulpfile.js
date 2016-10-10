const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('default', function() {
    console.log(`Let's rock \\m/ to code with ES6`);
	gulp.watch('src/*.js', ['babel']);
});

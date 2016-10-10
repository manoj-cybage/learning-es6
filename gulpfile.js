const gulp = require('gulp');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const notify = require("gulp-notify");
const debug = require('gulp-debug');

gulp.task('babel', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(notify({
            message: "file: <%= file.relative %>",
            onLast: false
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('default', function() {
    gutil.log(gutil.colors.bgGreen('Autobot:'), gutil.colors.yellow(`Let's rock \\m/ to code with ES6`));
    gutil.log(gutil.colors.bgYellow('@iamgoangle:'), gutil.colors.gray(`Hey dude!!`));
    console.log(`
                /|  /|  ---------------------------
                ||__||  |                         |
               /   O O\\__  I am a Pirate Software |
              /          \\   Developer !!         |
             /      \\     \\                       |
            /   _    \\     \\ ----------------------
           /    |\\____\\     \\      ||
          /     | | | |\\____/      ||
         /       \\| | | |/ |     __||
        /  /  \\   -------  |_____| ||
       /   |   |           |       --|
       |   |   |           |_____  --|
       |  |_|_|_|          |     \\----
       /\                  |
      / /\        |        /
     / /  |       |       |
 ___/ /   |       |       |
|____/    c_c_c_C/ \\C_c_c_c

`);
	gulp.watch('src/*.js', ['babel']);
});

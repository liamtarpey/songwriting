var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync').create();

var PATHS = {
    scripts: {
        src: [
            'src/modules/**/*.js'
        ],
        dest: 'dist/statics/js/build.js'
    }
};

/**
 * Copy and uglify scripts
 */
var scripts = function() {
    return gulp.src(PATHS.scripts.src)
        .pipe(uglify())
        .pipe(gulp.dest(PATHS.scripts.dest));
};

var serve = function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(PATHS.scripts.src).on('change', browserSync.reload);
};

/**
 * Enqueue functions
 */
gulp.task('scripts', scripts);
gulp.task('serve', serve);


/**
 * Default gulp task
 */
gulp.task('default', ['scripts', 'serve']);

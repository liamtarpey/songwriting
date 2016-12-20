/**
 * NPM modules
 */
var gulp        = require('gulp');
var del         = require('del');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var plumber     = require('gulp-plumber');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

/**
 * File paths
 */
var PATHS = {
    index: {
        src: './src/index.html',
        dest: './'
    },
    scripts: {
        src: [
            './libs/angular.js',
            './libs/angular-route.js',
            './src/app.index.js',
            './src/app.config.js',
            './src/app.routing.js',
            './src/modules/**/*.js'
        ],
        dest: {
            path: './dist/statics/js/',
            dev: 'build.js'
        }
    },
    styles: {
        src: './src/styles/styles.scss',
        dest: './dist/statics/css/'
    },
    templates: {
        src: [
            './src/modules/**/*.html'
        ],
        dest: './dist/statics/templates/'
    }
};

/**
 * Clean JS dist folder
 */
var cleanJS = function() {
    return del(PATHS.scripts.dest.path);
};

/**
 * Clean CSS dist folder
 */
var cleanCSS = function() {
    return del(PATHS.styles.dest);
};

/**
 * Clean templates dist folder
 */
var cleanTemplates = function() {
    return del(PATHS.templates.dest);
};

var cleanIndex = function() {
    return del(PATHS.index.dest);
};

/**
 * Copy and uglify scripts to dist
 */
var scripts = function() {
    return gulp.src(PATHS.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat(PATHS.scripts.dest.dev))
        .pipe(gulp.dest(PATHS.scripts.dest.path))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(plumber.stop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.scripts.dest.path));
};

/**
 * Copy and minify styles to dist
 */
var styles = function() {
    return gulp.src(PATHS.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(PATHS.styles.dest))
        .pipe(browserSync.stream());
};


/**
 * Copy HTML templates to dist
 */
var templates = function() {
    return gulp.src(PATHS.templates.src)
        .pipe(gulp.dest(PATHS.templates.dest));
};

var index = function() {
    return gulp.src(PATHS.index.src)
        .pipe(gulp.dest(PATHS.index.dest));
};

/**
 * Browser Sync
 */
var serve = function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
};

/**
 * Watch task
 */
var watch = function() {
    gulp.watch(PATHS.index.src).on('change', browserSync.reload);
    gulp.watch(PATHS.scripts.src).on('change', browserSync.reload);
    gulp.watch(PATHS.styles.src, ['styles']);
    gulp.watch(PATHS.templates.src).on('change', browserSync.reload);
};

/**
 * Enqueue functions
 */
gulp.task('cleanJS', cleanJS);
gulp.task('cleanCSS', cleanCSS);
gulp.task('cleanTemplates', cleanTemplates);
gulp.task('cleanIndex', cleanIndex);
gulp.task('scripts', ['cleanJS'], scripts);
gulp.task('styles', ['cleanCSS'], styles);
gulp.task('templates', ['cleanTemplates'], templates);
gulp.task('index', index);
gulp.task('serve', serve);
gulp.task('watch', watch);


/**
 * Default gulp task
 */
gulp.task('default', ['scripts', 'styles', 'templates', 'index', 'serve', 'watch']);

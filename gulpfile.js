var gulp = require('gulp');
    // rename = require('gulp-rename'),
    // traceur = require('gulp-traceur'),
    // webserver = require('gulp-webserver');
var del = require('del');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject("tsconfig.json");
// var tscConfig = require('./tsconfig.json');

var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var merge = require('merge-stream');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('less', function () {
  var lessStream = gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(concat('./less/styles.less'));

  return merge(lessStream)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('styles'));
});

gulp.task('copy', function () {
  return gulp.src([ './**', '!src/**/*.ts' ]) /* Glob required here. */
    .pipe(gulp.dest("dist"));
});

// run init tasks
gulp.task('default', [ 'clean', 'less', 'copy' ]);

// // run development task
// gulp.task('dev', ['watch', 'serve']);

// // serve the build dir
// gulp.task('serve', function () {
//   gulp.src('build')
//     .pipe(webserver({
//       open: true,
//       port: 3000
//     }));
// });

// // watch for changes and run the relevant task
// gulp.task('watch', function () {
//   gulp.watch('src/**/*.js', ['js']);
//   gulp.watch('src/**/*.html', ['html']);
//   gulp.watch('src/**/*.css', ['css']);
// });

// // move dependencies into build dir
// gulp.task('dependencies', function () {
//   return gulp.src([
//     'node_modules/traceur/bin/traceur-runtime.js',
//     'node_modules/systemjs/dist/system-csp-production.src.js',
//     'node_modules/systemjs/dist/system.js',
//     'node_modules/reflect-metadata/Reflect.js',
//     'node_modules/angular2/bundles/angular2.js',
//     'node_modules/angular2/bundles/router.js',
//     'node_modules/angular2/bundles/angular2-polyfills.js',
//     'node_modules/rxjs/bundles/Rx.js',
//     'node_modules/es6-shim/es6-shim.min.js',
//     'node_modules/es6-shim/es6-shim.map',
//     'bower_components/**/jquery/dist/**/*.*',
//     'bower_components/**/bootstrap/dist/**/*.*',
//     'bower_components/**/font-awesome/css/*.*',
//     'bower_components/**/font-awesome/fonts/*.*',
//   ])
//     .pipe(gulp.dest('build/lib'));
// });

// // transpile & move js
// gulp.task('js', function () {
//   return gulp.src('src/**/*.js')
//     .pipe(rename({
//       extname: ''
//     }))
//     .pipe(traceur({
//       modules: 'instantiate',
//       moduleName: true,
//       annotations: true,
//       types: true,
//       memberVariables: true
//     }))
//     .pipe(rename({
//       extname: '.js'
//     }))
//     .pipe(gulp.dest('build'));
// });

// // move html
// gulp.task('html', function () {
//   return gulp.src('src/**/*.html')
//     .pipe(gulp.dest('build'))
// });

// // move css
// gulp.task('css', function () {
//   return gulp.src('src/**/*.css')
//     .pipe(gulp.dest('build'))
// });

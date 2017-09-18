/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Dependencies
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
var sass = require('gulp-sass');


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Path variables
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const paths = {
  allJS: './public/js/**/*.js',
  mainCSS: './public/styles/main{.scss,.css}',
  otherCSS: './public/styles/*{.scss,.css}',
  indexHTML: './public/index.html'
};


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Tasks
    Concatenate and babelize .js and .scss/.css files
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task('js', _ => (
  gulp.src(['./public/app.js', paths.allJS])
    .pipe(concat('all.js'))
    .pipe(babel( { presets: ['es2015'] } ))
    .pipe(gulp.dest('./public/builds/'))
));

gulp.task('sass', _ => (
  gulp.src(paths.mainCSS)
    .pipe(concat('all.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/builds/'))
));


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Default tasks
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task('default', ['sass']);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Watch tasks
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.watch([paths.mainCSS, paths.otherCSS], ['sass']);
gulp.watch([paths.allJS, paths.indexHTML], ['js']);
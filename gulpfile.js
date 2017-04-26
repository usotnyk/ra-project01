var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");

gulp.task("kitty", function() {
  return gulp.src("**/*.css") //usually do "assets/**/*.css" not to look inside node folders
  .pipe(concat("min.css")) //argument - name  of the file created after concatination
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest("./dist")) //location to put the newly created file



});
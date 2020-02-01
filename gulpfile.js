let gulp = require("gulp");
let autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
  return gulp
    .src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

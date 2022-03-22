const gulp = require("gulp");
const gulpPug = require("gulp-pug");

function pug2html() {
  return gulp
    .src("dev/pug/pages/*.pug")
    .pipe(gulpPug({ pretty: true }))
    .pipe(gulp.dest("dist"));
}

exports.default = gulp.series(pug2html);

gulp = require("gulp")
Fiber = require("fibers")
sass = require("gulp-sass")(require("sass"))

compileSass = () =>
  return gulp.src("./sass/*.sass")
    .pipe(sass({ outputStyle: "expanded" }, fiber: Fiber).on("error", sass.logError))
    .pipe(gulp.dest("dist/expanded"))
    .pipe(sass({outputStyle: "compressed"}, fiber: Fiber).on("error", sass.logError))
    .pipe(gulp.dest("dist/compressed"))

watchTask = () =>
  gulp.watch("./sass/**/*.sass", gulp.series(compileSass))

exports.default = gulp.series(
  compileSass,
  watchTask
)
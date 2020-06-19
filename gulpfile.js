const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

exports.default = () => {
    gulp.watch("sass/*/*.scss", compileSass);
}

const compileSass = () => {
    return gulp.src("sass/luxa.scss")
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
        .pipe(gulp.dest("dist/expanded"))
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("dist/compressed"));
}
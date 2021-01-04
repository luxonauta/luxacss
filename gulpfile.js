const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("sass");

exports.default = () => {
    gulp.watch(["sass/luxa.sass", "sass/*/*.sass"], compileSass);
}

const compileSass = () => {
    return gulp.src("sass/luxa.sass")
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
        .pipe(gulp.dest("dist/expanded"))
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("dist/compressed"));
}
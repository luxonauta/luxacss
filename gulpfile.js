const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const compileSass = () => {
	return gulp
		.src("./sass/*.scss")
		.pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
		.pipe(gulp.dest("dist/expanded"))
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("dist/compressed"));
};

const watchTask = () => {
	gulp.watch("./sass/**/*.scss", gulp.series(compileSass));
};

exports.default = gulp.series(compileSass, watchTask);

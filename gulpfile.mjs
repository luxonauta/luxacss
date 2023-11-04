import autoprefixer from "autoprefixer";
import gulp from "gulp";
import postcss from "gulp-postcss";
import sassEmbedded from "sass-embedded";
import sassModule from "gulp-sass";

const sass = sassModule(sassEmbedded);

const createSassTask = (outputStyle) => () => {
  return gulp
    .src("./sass/luxa.scss")
    .pipe(sass({ outputStyle }).on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(`dist/${outputStyle}`));
};

const compileSassExpanded = createSassTask("expanded");
const compileSassCompressed = createSassTask("compressed");

const compileSass = gulp.parallel(compileSassExpanded, compileSassCompressed);

const watchTask = () => {
  gulp.watch("./sass/**/*.scss", gulp.series(compileSass));
};

export default gulp.series(compileSass, watchTask);

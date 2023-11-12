import autoprefixer from "autoprefixer";
import gulp from "gulp";
import postcss from "gulp-postcss";
import sassEmbedded from "sass-embedded";
import sassModule from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";

const sass = sassModule(sassEmbedded);

const SASS_SRC = "./sass/luxa.scss";
const SASS_DEST = "dist";
const SASS_MAPS = "./maps";

const sassErrorHandler = (error) => {
  sass.logError(error);
};

const compileSass = (outputStyle) => {
  let pipeline = gulp.src(SASS_SRC);

  if (outputStyle === "expanded") {
    pipeline = pipeline.pipe(sourcemaps.init());
  }

  pipeline = pipeline
    .pipe(sass({ outputStyle }).on("error", sassErrorHandler))
    .pipe(postcss([autoprefixer()]));

  if (outputStyle === "expanded") {
    pipeline = pipeline.pipe(sourcemaps.write(SASS_MAPS));
  }

  return pipeline.pipe(gulp.dest(`${SASS_DEST}/${outputStyle}`));
};

const compileSassExpanded = () => compileSass("expanded");
const compileSassCompressed = () => compileSass("compressed");

const watchTask = () => {
  gulp.watch(
    "./sass/**/*.scss",
    gulp.series(compileSassExpanded, compileSassCompressed),
  );
};

export default gulp.series(
  compileSassExpanded,
  compileSassCompressed,
  watchTask,
);

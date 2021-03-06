import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
// autoprefixer는 컴파일된 css 파일 안에서, webkit prefix 등을 추가해주는 라이브러리임.
// 여러개의 브라우저에서 호환가능하게 해줌.
import minifyCSS from "gulp-csso";
import bro from "gulp-browserify";
import babelify from "babelify";
import del from "del";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "src/assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "src/assets/scss/**/*.scss",
    // watch를 해당 경로의 모든 scss확장자를 갖는 파일로 지정
  },
  js: {
    src: "src/assets/js/main.js",
    dest: "src/static/js",
    watch: "src/assets/js/**/*.js",
  },
};

const clean = () => del(["src/static"]);

const js = () =>
  gulp
    .src(paths.js.src)
    .pipe(
      bro({
        transform: babelify.configure({ presets: ["@babel/preset-env"] }),
      })
    )
    .pipe(gulp.dest(paths.js.dest));

const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));

const watchFile = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};

const dev = gulp.series(clean, styles, js, watchFile);

const build = gulp.series(clean, styles, js);

export default dev;
// export default하면, gulpfile을 실행시키는걸로 바로 , dev를 실행시키도록 되어있음.

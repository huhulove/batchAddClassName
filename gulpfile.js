let path = require("path");
let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let cssWrap = require("gulp-css-wrap");

let customThemeName = ".theme-summer";
let fileName = "#ff0000";

gulp.task("addClassName", () => {
  return gulp
    .src(path.resolve("./src/"+ fileName +"/index.css"))
    .pipe(cssWrap({ selector: customThemeName }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/" + fileName));
});

gulp.task("copyFonts", () => {
  return gulp
    .src(path.resolve("./src/"+ fileName +"/fonts/*"))
    .pipe(gulp.dest("dist/" + fileName + "/fonts"));
});

gulp.task(
  "default",
  gulp.series(["addClassName", "copyFonts"], () => {
    console.log("执行成功");
  })
);

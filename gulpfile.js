const gulp = require("gulp")
const {task} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemap = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")

task("sass", ()=>{
    return gulp.src("src/styles/*.scss")
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemap.write("./maps"))
    .pipe(gulp.dest("build/styles"))
})


task("watch-sass",()=>{
    return gulp.watch("src/styles/*.scss", gulp.series("sass"))
})
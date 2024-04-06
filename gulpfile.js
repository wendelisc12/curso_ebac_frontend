const gulp = require("gulp")
const {task} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemap = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")
const obfuscate = require('gulp-obfuscate');
const imagemin = require("gulp-imagemin")

task("sass", ()=>{
    return gulp.src("src/styles/*.scss")
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemap.write("./maps"))
    .pipe(gulp.dest("build/styles"))
})

task("miniJS", ()=>{
    return gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("build/js"))
})

task("miniIMG", ()=>{
    return gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"))
})

task("watch",()=>{
    gulp.watch("src/styles/*.scss", gulp.series("sass"))
    gulp.watch("src/js/*.js", gulp.series("miniJS"))
    gulp.watch("src/images/*", gulp.series("miniIMG"))
})

task("default", gulp.series("watch"))
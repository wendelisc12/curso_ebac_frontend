const gulp = require("gulp")
const less = require("gulp-less")
const {task} = require("gulp")

task("less", ()=> {
    return gulp.src("src/styles/*.less")
    .pipe(less())
    .pipe(gulp.dest("build/styles"))
}
)

task("default", ()=>{
    gulp.watch('src/styles/*less', {ignoreInitial: false}, gulp.series("less"))
})
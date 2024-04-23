module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass:{
            dist:{
                files: { "dist/styles/style.css" : "src/styles/style.scss"}
            },
            options:{
                style: "compressed"
            }
        },
        watch:{
            sass:{
                files: ["src/styles/*.scss"],
                tasks: ['sass']
            }
            
        }
    })

    grunt.loadNpmTasks("grunt-contrib-sass")
    grunt.loadNpmTasks("grunt-contrib-watch")

    grunt.registerTask("default", "watch")
}
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass:{
            dev:{
                files:{
                    "dev/styles/style.css" : "src/styles/style.scss"
                }
            },
            prod:{
                options:{
                    style: "compressed"
                },
                files: { "dist/styles/style.min.css" : "src/styles/style.scss"}
            }
        },

        uglify:{
            target:{
                files:{"dist/scripts/script.min.js" : "src/scripts/script.js"}
            }
        },

        htmlmin:{
            prod:{
                options:{
                    removeComments: true,
                    collapseWhitespace:true
                },
                files: {
                    "prebuild/index.html" : "src/index.html"
                }
            }
        },

        replace:{
            dev:{
                options: {
                    patterns: [
                        { match: "css", replacement: "styles/style.css" }, 
                        { match: "js", replacement: "../src/scripts/script.js" }
                    ]
                },
                files: [{ expand: true, flatten: true, src: ["src/index.html"], dest: "dev/"}]
            },
            prod:{
                options: {
                    patterns: [
                        { match: "css", replacement: "styles/style.min.css" }, 
                        { match: "js", replacement: "scripts/script.min.js" }
                    ]
                },
                files: [{ expand: true, flatten: true, src: ["prebuild/index.html"], dest: "dist/"}]
            },
            
        },

        watch:{
            sass:{
                files: ["src/styles/*.scss"],
                tasks: ['sass:dev']
            }
            
        },
        clean:["prebuild"]
    })

    grunt.loadNpmTasks("grunt-contrib-sass")
    grunt.loadNpmTasks("grunt")
    grunt.loadNpmTasks("grunt-replace")
    grunt.loadNpmTasks("grunt-contrib-htmlmin")
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-contrib-clean")

    grunt.registerTask("default", ["sass:dev", "replace:dev"])
    grunt.registerTask("build", ["sass:prod", "uglify", "htmlmin:prod","replace:prod", "clean"])
}
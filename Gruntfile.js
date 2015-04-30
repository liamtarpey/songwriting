module.exports = function(grunt) {

    // Configuration 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'dev/js/libs/angular.js',
                    'dev/js/libs/angular-animate.js',
                    'dev/js/libs/angular-route.js',
                    'dev/js/libs/angular-sanitize.js',
                    'dev/js/libs/modernizr.js',
                    'dev/js/app.js',
                    'dev/js/config/*.js',
                    'dev/js/factories/*.js',
                    'dev/js/directives/*.js',
                    'dev/views/**/*.js'
                ],
                dest: 'assets/js/main.js',
            }
        },

        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js',
            }
        },

        watch: {
            scripts: {
                files: [
                    'dev/js/*.js',
                    'dev/js/**/*.js',
                    'dev/js/**/**/*.js',
                    'dev/views/**/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: [
                    'dev/sass/*.scss', 
                    'dev/sass/**/*.scss', 
                    'dev/sass/**/**/*.scss',
                    'dev/views/**/*.scss'
                ],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },
            html: {
                files: [
                    'dev/views/**/*.html',
                    'dev/views/**/**/*.html'
                ],
                tasks: ['copy']
            }
        },

        compass: {                  
            dist: {                
                options: {          
                    sassDir: 'dev/sass',
                    cssDir: 'assets/css',
                    environment: 'development',
                }
            }
        },

        copy: {
            main: {
                expand: true, 
                flatten: true,
                cwd: 'dev/views', 
                src: [
                    '**/*.html'
                    ], 
                dest: 'ng-views/', 
                filter: 'isFile'
            }
        }
                
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'watch', 'compass', 'copy']);

};
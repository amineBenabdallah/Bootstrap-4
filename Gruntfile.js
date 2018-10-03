'use strict';

module.exports = function (grunt) {
	 // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
	  sprite: 'grunt-spritesmith',
	  foo: '@abc/grunt-foo',        // for private modules.
	  bar: 'custom/bar.js'          // for custom tasks.
	});

  // Define the configuration for all the tasks
  grunt.initConfig({
  	 sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
     watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
     browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }

  });
  grunt.registerTask('css', ['sass']);
   grunt.registerTask('default', ['browserSync', 'watch']);
};
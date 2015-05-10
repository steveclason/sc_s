
module.exports = function(grunt){

  var env = grunt.option( 'env' ) || 'local'; // Options are 'local', 'dev', 'prod'.

  grunt.loadNpmTasks( "grunt-contrib-compass" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-copy-to" );

  grunt.initConfig({
    compass: {
      dev: {
        options: {
          sassDir: "sass",
          cssDir: "/",
          sourcemap: true,
          outputStyle: "nested"
        }
      }
    },

    // Copy necessary src files to dist.
    copyto: {

      // Copy distribution files to local WordPress installation.
      local: {
        files: [
          {
            expand: true,
            src: '**/*',
            dest: '../wordpress/wp-content/themes/_s'
          }
        ]
      },
    },

    watch: {
      sass: {
        files: "sass/**/*",
        tasks: ["compass", "copyto"]
      },
      code: {
        files: '**/*',
        tasks: ["copyto"]
      }
    }
  });

  grunt.registerTask( 'default', ['compass', 'copyto']);
}

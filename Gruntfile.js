module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'assets/css/_core.css': 'assets/less/_core.less',
          'assets/css/_utility.css': 'assets/less/_utility.less',
          'assets/css/_forms.css': 'assets/less/_forms.less',
          'assets/css/styles.css': 'assets/less/styles.less',
          'assets/css/_responsive.css': 'assets/less/_responsive.less'
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
          development: {
            files: {
              'src/public/css/style.css': 'bower_components/bootstrap-less/less/bootstrap.less'
            }
          }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.registerTask('default', ['less']); //, 'concat', 'uglify'
};

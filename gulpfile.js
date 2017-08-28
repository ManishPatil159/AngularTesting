var gulp = require('gulp');
var Server = require('karma').Server;

// plugins
var connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('unit', function (done) {
    console.log('Starting Unit testing');
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});
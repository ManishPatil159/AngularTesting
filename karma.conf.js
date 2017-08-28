module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

   // plugins:['karma-ng-html2js-preprocessor'],
    
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/app.js',
      'app/features/**/*.js',
      'app/features/**/*.html'
    ],

    exclude: [
         'app/features/**/*.e2e.spec.js',
    ],

    preprocessors: {    
      'app/features/**/*.html': ['ng-html2js'],
      'app/features/directive/**/*.html': ['ng-html2js'] 
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
      // create a single module that contains templates from all the files
      moduleName: 'app'
    },

    reporters: ['dots'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

  });
};
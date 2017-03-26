// Karma configuration
// Generated on Sun Feb 19 2017 15:02:28 GMT+0000 (GMT)
const webpackConfig = require('./webpack.test.config');
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon', 'source-transform-support'],


        // list of files / patterns to load in the browser
        files: [
            'test.shim.js',
        ],

        exclude: [
            'node_modules/angular2/**/*_spec.js',
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test.shim.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'karma-remap-istanbul' ],

        remapIstanbulReporter: {
            remapOptions: {}, //additional remap options
            reportOptions: {}, //additional report options
            reports: {
                lcovonly: 'coverage/lcov.info',
                html: 'coverage/html/report'
            }
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}

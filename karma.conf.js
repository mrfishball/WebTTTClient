module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],

    files: [
      { pattern: 'src/app/*.js' },
      'test/all_tests.js'
    ],

    preprocessors: {
      'test/all_tests.js': [ 'webpack' ]
    },

    webpack: {
      mode: 'development',
      module: {
        rules : [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      }
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};

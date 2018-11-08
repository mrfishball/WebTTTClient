module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],

    files: [
      { pattern: 'src/**/*.js' },
      'test/all_tests.js'
    ],

    preprocessors: {
      'src/**/*.js': [ 'webpack' ],
      'test/all_tests.js': [ 'webpack' ]
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    concurrency: Infinity
  })
}

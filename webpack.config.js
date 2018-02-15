module.exports = {
    entry: {
        app:  ['babel-polyfill','./src/js/app.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader", exclude: "/node_modules/"}
        ]
    }
}
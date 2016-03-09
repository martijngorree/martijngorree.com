var path = require('path');
 
module.exports = {
    entry: "./frontend-js/app.es6.js",
    output: {
        path: path.join(__dirname,'frontend-js', 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.hbs$/, 
                loader: "handlebars-loader" 
            },
            {
                test: /\.es6\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

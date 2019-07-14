const path = require('path');
const dependencies = Object.keys(require('./package.json').dependencies); //couldn't get this working

//the development file will be in src/jpack.min.js
//you can include this file directly in your site if there is an issue and the sourcemaps should help identify what's wrong
const development = {
    entry: './src/jpack.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'jpack.compiled.js',
        path: path.resolve(__dirname, 'src')
    },
    externals: dependencies
};

//the production file will be in dist/jpack.min.js
const production = {
    entry: './src/jpack.js',
    mode: 'production',
    output: {
        filename: 'jpack.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: dependencies,
    module: {
        rules: [
            {
                loader:'babel-loader',
                test: /\.js$/,
                exclude:  /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    optimization: {
        minimize: true
    }
};

module.exports = [development, production];
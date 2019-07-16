const path = require('path');
const dependencies = Object.keys(require('./package.json').dependencies); //couldn't get this working

//build a bundled version for testing with sourcemaps and dependencies
const test = {
    target: 'web',
    entry: './src/jpack.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'jpack.bundled.js',
        path: path.resolve(__dirname, 'test')
    }
};

//build a production version with bundled dependencies
const prod_with_dependencies = {
    target: 'web',
    entry: './src/jpack.js',
    mode: 'production',
    output: {
        filename: 'jpack.bundled.min.js',
        path: path.resolve(__dirname, 'dist')
    },
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

//build a production minified version without dependencies bundled
const production = {...prod_with_dependencies, ...{
    output: {
        filename: 'jpack.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: dependencies,
}};

module.exports = [test, production, prod_with_dependencies];
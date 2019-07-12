const path = require('path');

module.exports = {
    entry: './src/jpack.js',
    mode: 'production',
    output: {
        filename: 'jpack.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};
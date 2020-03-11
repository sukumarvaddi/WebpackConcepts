const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
    mode: 'production',

    /* 
    // Multiple Entry Points
    entry: {
        subtract: './src/subtract.js',
        add: './src/add.js'
    },
 */
    // Single Entry point
    entry: './src/index.js',

    //multi main entry
    // entry: ['./src/index', './src/add', './src/subtract'],

    output: {
        filename: 'singleEntry.js'
        /*   
                    // Multi Entry Points
                            filename: '[name].js', 
                            path: path.resolve(__dirname, 'distribution')
                        */
        // filename:'multiMainEntry.js'
    },

    module: {
        rules: [
            { test: /\.css/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] }
        ]
    },

    plugins: [
        new htmlWebpackPlugin(),
        new new ManifestPlugin()
    ]


};
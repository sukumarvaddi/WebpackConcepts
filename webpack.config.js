const path = require('path');
module.exports = {
    mode: 'development',

    /* 
    // Multiple Entry Points
    entry: {
        subtract: './src/subtract.js',
        add: './src/add.js'
    },
 */
    // Single Entry point
    // entry: './src/index.js',

    //multi main entry
    // entry: ['./src/index', './src/add', './src/subtract'],

    output: {
        // filename: 'singleEntry.js'
        /*   
                    // Multi Entry Points
                            filename: '[name].js', 
                            path: path.resolve(__dirname, 'distribution')
                        */
        // filename:'multiMainEntry.js'
    }
};
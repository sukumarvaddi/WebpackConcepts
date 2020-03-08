module.exports = {
    mode: 'development',

    // Multiple Entry Points
    entry: {
        subtract: './src/subtract.js',
        add: './src/add.js'
    }


    // Single Entry point
    //  entry: './src/index.js'

    //multi point entry
    // entry: ['./src/index', './src/add', './src/subtract']
};
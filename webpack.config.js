var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, './');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    // entry: './js/entry.js',
    entry: [path.resolve(APP_PATH, 'js/index.js')],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.jsx?$/,
                loaders: ['babel'],
                // loaders: ['react-hot','babel?presets[]=es2015&presets[]=react&plugins[]=transform-es3-member-expression-literals&plugins[]=transform-es3-property-literals'],


                // presets: ['react', 'es2015'],
                // plugins: [
                //         'transform-es3-property-literals',
                //         'transform-es3-member-expression-literals',
                //     ]
                    // loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], include: path.resolve(APP_PATH, './js/') 
            }]
            // loaders: [, {
            //     test: /\.jsx?$/,
            //     loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
            //     include: '/js'
            // }]
    },
    sourcemap: true,
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    //     publicPath: '/build',
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ]
};

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/module/index.ts',
    devtool: false,
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.build.json"
                }
            },
        ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '..', 'dist'),
        library: 'site-auth-module',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
};

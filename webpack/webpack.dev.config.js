const path = require('path');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    mode: 'development',
    entry: './src/main.tsx',
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.json",
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
                    compilerOptions: {
                        noUnusedLocals: false,
                        noUnusedParameters: false
                    }
                }
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dev'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '..', 'dev'),
        }
    }
};

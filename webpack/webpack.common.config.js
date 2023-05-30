const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@/module': path.resolve(__dirname, '../src/module/index.ts'),
            '@/constants': path.resolve(__dirname, '../src/module/constants/'),
            '@/components': path.resolve(__dirname, '../src/module/components/'),
            '@/interfaces': path.resolve(__dirname, '../src/module/interfaces/'),
            '@/enums': path.resolve(__dirname, '../src/module/enums/'),
            '@/icons': path.resolve(__dirname, '../src/module/icons/'),
        }
    },
};

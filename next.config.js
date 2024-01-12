/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config, { isServer }) => {

        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '/_next/',
                        outputPath: 'static/fonts/',
                    },
                },
            ],
        });

        return config;
    },

    compiler: {
        emotion: {
            // default is true. It will be disabled when build type is production.
            sourceMap: true,
            // default is 'dev-only'.
            autoLabel: 'dev-only',
            // default is '[local]'.
            // Allowed values: `[local]` `[filename]` and `[dirname]`
            // This option only works when autoLabel is set to 'dev-only' or 'always'.
            // It allows you to define the format of the resulting label.
            // The format is defined via string where variable parts are enclosed in square brackets [].
            // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
            labelFormat: '[local]',
        }
    },

};

module.exports = nextConfig

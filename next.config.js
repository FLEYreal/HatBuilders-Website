/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... другие настройки

    webpack: (config, { isServer }) => {
        // ... другие настройки webpack

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

        // ... другие настройки webpack

        return config;
    },
};

module.exports = nextConfig

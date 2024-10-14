const pkg = require('./package');
const Dotenv = require('dotenv-webpack');

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        },
        plugins: [
            new Dotenv()
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    config: 'postcss.config.js'
                                }
                            }
                        }
                    ]
                }
            ],

        }
    },
    /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
    navigations: {
        'cats.main': '/cats'
    },
    features: {
        'cats': {
            // add your features here in the format [featureName]: { value: string }
        }
    },
    config: {
        'cats.api': '/api',
        'cats.backend': process.env.BACKEND
    }
};

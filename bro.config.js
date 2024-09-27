const pkg = require('./package');
const { resolve } = require('node:path');

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        },
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
            ]
        }
    },
    /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
    navigations: {
        'portfolio_app.main': '/portfolio_app'
    },
    features: {
        'portfolio_app': {
            // add your features here in the format [featureName]: { value: string }
        }
    },
    config: {
        'portfolio_app.api': '/api'
    }
};

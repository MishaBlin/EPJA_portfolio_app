const pkg = require('./package');

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
        'cats.main': '/cats'
    },
    features: {
        'cats': {
            // add your features here in the format [featureName]: { value: string }
        }
    },
    config: {
        'cats.backend': 'http://localhost:8099/api/cats'
    }
};

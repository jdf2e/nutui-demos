const path = require('path')

let plugins = !['harmony', 'rn'].includes(
    process.env.TARO_ENV
)
    ? ['@tarojs/plugin-html']
    : []

plugins.push([
    '@jdtaro/plugin-intl',
    {
        default: 'zh-CN',
        // 这里配置加载组件库的 locales
    }
])
const config = {
    projectName: 'first',
    date: '2022-7-11',
    designWidth: 375,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1,
    },
    sourceRoot: 'src',
    outputRoot: `dist/${process.env.TARO_ENV === 'h5' ? 'demo' : process.env.TARO_ENV}`,
    compiler: {
        type: 'webpack5',
        prebundle: {
            enable: false,
        },
    },
    cache: {
        enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    defineConstants: {},
    plugins,
    copy: {
        patterns: [],
        options: {},
    },
    sass: {
        resource: [
            // path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')
        ],
        data: '@import "@nutui/nutui-react-taro/dist/styles/variables.scss";'
    },
    alias: {
        '@/sites': path.resolve(__dirname, '../src/sites'),
        '@/locales': path.resolve(__dirname, '../src/locales'),
        '@/utils': path.resolve(__dirname, '../src/utils'),
    },
    framework: 'react',
    mini: {
        compile: {
            include: [path.resolve(__dirname, '../../../src')],
        },
        postcss: {
            pxtransform: {
                enable: true,
                // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
                // config: {selectorBlackList: ['nut-', 'demo', 'index', 'page']},
            },
            url: {
                enable: true,
                config: {
                    limit: 1024, // 设定转换尺寸上限
                },
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
        },
    },
    h5: {
        // compile: {
        //     include: [path.resolve(__dirname, '../../../src'), path.resolve(__dirname, '../node_modules/@nutui/nutui-react-taro')],
        // },
        publicPath: '/',
        staticDirectory: 'static',
        // esnextModules: ['@nutui/nutui-react-taro'],
        postcss: {
            pxtransform: {
                enable: true,
                config: {
                }
            },
            // url: {
            //     enable: true,
            //     config: {
            //         url: 'inline',
            //         limit: 1024, // 设定转换尺寸上限
            //     },
            // },
            // autoprefixer: {
            //     enable: true,
            //     config: {},
            // },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
            // 自定义 Webpack 配置
            devServer: {},
        },
        output: {
            environment: {
                asyncFunction: true
            }
        }
    },
    isWatch: true,
}

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}

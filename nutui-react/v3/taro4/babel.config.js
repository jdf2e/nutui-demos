// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
    presets: [
        [
            'taro',
            {
                framework: 'react',
                ts: true,
            },
        ],
    ],
    plugins:
        process.env.TARO_ENV === 'rn' || process.env.TARO_ENV === 'jdrn'
            ? []
            : [['@babel/plugin-transform-typescript', {allowDeclareFields: true}],
                [
                    "import",
                    {
                        "libraryName": "@nutui/nutui-react-taro",
                        "camel2DashComponentName": false,
                        "customName": (name, file) => {
                          return `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}`
                        },
                        "customStyleName": (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style`
                    },
                    'nutui-react-taro'
                ]
            ],
}

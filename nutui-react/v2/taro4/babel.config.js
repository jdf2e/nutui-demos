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
      : [['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
      [
        "import",
        {
          "libraryName": "@nutui/nutui-react-taro",
          "libraryDirectory": "dist/esm",
          "style": true,
          "camel2DashComponentName": false
        },
        'nutui-react-taro'
      ]],
}

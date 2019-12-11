const path = require('path')

module.exports = {
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.resolve(__dirname, './node_modules/ant-design-vue/dist/antd.less'),
                path.resolve(__dirname, './src/style/theme.less')
              ]
            }
          }
        ]
      }
    ]
  }
}

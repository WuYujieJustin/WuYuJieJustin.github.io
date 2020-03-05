// const path = require('path')

// // GZIP
// // 是否使用gzip
// // const productionGzip = true
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']
// const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
// // const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// // 打包分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// console.log('NODE_ENV', process.env.NODE_ENV)
// console.log('isProduction', isProduction)
// const externals = {
//   'vue': 'Vue',
//   'vue-router': 'VueRouter',
//   'vuex': 'Vuex',
//   'axios': 'axios',
//   'element-ui': 'ELEMENT',
//   'qq': 'qq',
//   'moment': 'moment',
//   'jquery': 'jQuery',
//   'lodash': '_',
//   'echarts': 'echarts',
//   'TMap': 'TMap'
//   // 'surveyjs-editor': 'surveyjs-editor'
// }

// // CDN外链，会插入到index.html中
// const cdn = {
//   // 开发环境
//   dev: {
//     css: [
//       'https://cdn.bootcss.com/element-ui/2.4.5/theme-chalk/index.css'
//       // 'http://asset.zcbd.marketbox.cn/survey.min.css',
//       // 'http://asset.zcbd.marketbox.cn/surveyeditor.min.css'
//     ],
//     js: []
//   },
//   // 生产环境
//   build: {
//     css: [
//       'https://cdn.bootcss.com/element-ui/2.4.5/theme-chalk/index.css'
//       // 'http://asset.zcbd.marketbox.cn/survey.min.css',
//       // 'http://asset.zcbd.marketbox.cn/surveyeditor.min.css'
//     ],
//     js: [
//       'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
//       'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
//       'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
//       'https://cdn.bootcss.com/axios/0.19.0/axios.min.js',
//       'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js',
//       'https://cdn.bootcss.com/echarts/4.4.0-rc.1/echarts.min.js',
//       'https://cdn.bootcss.com/moment.js/2.22.2/moment.min.js',
//       'https://cdn.bootcss.com/element-ui/2.4.5/index.js',
//       'https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js'
//       // 'http://asset.zcbd.marketbox.cn/survey.ko.min.js',
//       // 'http://asset.zcbd.marketbox.cn/surveyeditor.min.js'
//     ]
//   }
// }

// const resolve = dir => path.join(__dirname, dir)
// module.exports = {
//   // publicPath: 'http://asset.zcbd.marketbox.cn/',
//   // publicPath: isProduction
//   //   ? 'http://asset.zcbd.marketbox.cn/'
//   //   : '/',
//   publicPath: '/',
//   // 如果你不需要生产环境的 entBoss.js map，可以将其设置为 false 以加速生产环境构建。
//   productionSourceMap: false,
//   // indexPath: 'main.html',
//   parallel: require('os').cpus().length > 1,
//   // pwa: {},
//   css: {
//     loaderOptions: {
//       // pass options to sass-loader
//       sass: {
//         // @/ is an alias to src/
//         // so this assumes you have a file named `src/variables.scss`
//         data: [
//           `@import "src/assets/scss/variables.scss";`,
//           // `@import "src/assets/scss/common.scss";`,
//           `@import "src/assets/scss/common.scss";`,
//           `@import "src/assets/scss/animation.scss";`
//         ].join('')
//       }
//     }
//   },
//   chainWebpack: (config) => {
//     // const svgRule = config.module.rule('svg')
//     // 清除已有的所有 loader。
//     // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
//     // svgRule.uses.clear()
//     // svgRule
//     //   .test(/\.svg$/)
//     //   .include.add(path.resolve(__dirname, 'src/icons/svg'))
//     //   .end()
//     //   .use('svg-sprite-loader')
//     //   .loader('svg-sprite-loader')
//     //   .options({
//     //     symbolId: 'icon-[name]'
//     //   })
//     // const fileRule = config.module.rule('file')
//     // fileRule.uses.clear()
//     // fileRule
//     //   .test(/\.svg$/)
//     //   .exclude.add(path.resolve(__dirname, 'src/icons/svg'))
//     //   .end()
//     //   .use('file-loader')
//     //   .loader('file-loader')
//     // const svgRule = config.module.rule('svg')
//     // svgRule.uses.clear()
//     // svgRule
//     //   .use('vue-svg-loader')
//     //   .loader('vue-svg-loader')
//     config
//       .module
//       .rule('image-webpack-loader')
//       .test(/\.(gif|png|jpe?g|svg)$/i)
//       .use('file-loader')
//       .loader('image-webpack-loader')
//       .tap(() => ({
//         disable: isProduction
//       }))
//     config.externals({
//       'qq': 'qq',
//       'TMap': 'TMap'
//     })
//     // config.externals({
//     //   'qq': 'qq',
//     //   'vue': 'Vue',
//     //   'vue-router': 'VueRouter',
//     //   'vuex': 'Vuex',
//     //   'moment': 'moment',
//     //   'element-ui': 'ELEMENT',
//     //   'jquery': 'jQuery',
//     //   'lodash': 'lodash',
//     //   'echarts': 'echarts',
//     //   'axios': 'axios'
//     // })
//     config
//       .plugin('html')
//       .tap(args => {
//         if (isProduction) {
//           args[0].cdn = cdn.build
//         } else {
//           args[0].cdn = cdn.dev
//         }
//         return args
//       })
//     // 打包分析
//     if (process.env.IS_ANALYZ) {
//       config.plugin('webpack-bundle-analyzer')
//         .use(BundleAnalyzerPlugin, [{
//           analyzerMode: 'static'
//         }])
//     }
//     config
//       .output
//       .filename('tidi-admin-pc-fe.[name].[hash].js')
//       .end()
//     config.resolve.alias
//       // ////////////////////////////////////////////////////
//       // base common基础公共部分
//       //   公共样式和工具类
//       .set('scss', resolve('src/assets/scss'))
//       //   公共store模块
//       .set('store', resolve('src/store'))
//       //   公共工具类和工具函数
//       .set('utils', resolve('src/utils'))
//       //   公共常量, 例如地区字典值
//       .set('constant', resolve('src/constant'))
//       //   公共组件
//       .set('components', resolve('src/components'))
//       //   公共过滤器
//       .set('filters', resolve('src/filters'))
//       //   公共指令
//       .set('api', resolve('src/api'))
//       //   公用的vue插件
//       // .set('plugin', resolve('src/plugin'))
//       //   公用的vue插件
//       .set('img', resolve('src/assets/img'))
//       //   公用的vue插件
//       .set('mixins', resolve('src/mixins'))
//       //   公用的vue页面
//       .set('views', resolve('src/view'))
//       .set('plugins', resolve('src/plugins'))
//       // 防止打包多分lodash
//       // .set('lodash', resolve('node_modules/lodash'))
//   },
//   configureWebpack: config => {
//     // const myConfig = {}
//     if (isProduction) {
//       // 为生产环境修改配置...
//       // myConfig.plugins = []
//       // 3. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
//       // productionGzip && myConfig.plugins.push(
//       //   new CompressionWebpackPlugin({
//       //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
//       //     threshold: 8192,
//       //     minRatio: 0.8
//       //   })
//       // )
//       config.externals = externals
//       config.plugins.push(new CompressionWebpackPlugin({
//         algorithm: 'gzip',
//         test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
//         threshold: 10240,
//         minRatio: 0.8
//       }))
//       config.optimization = {
//         splitChunks: {
//           chunks: 'all',
//           maxInitialRequests: Infinity,
//           minSize: 300000, // 依赖包超过300000bit将被单独打包
//           automaticNameDelimiter: '-',
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name (module) {
//                 const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
//                 return `chunk.${packageName.replace('@', '')}`
//               },
//               priority: 10
//             }
//           }
//         }
//       }
//       // config.optimization.splitChunks({
//       //   chunks: 'all',
//       //   maxInitialRequests: Infinity,
//       //   minSize: 300000, // 依赖包超过300000bit将被单独打包
//       //   automaticNameDelimiter:'-',
//       //   cacheGroups: {
//       //     vendor: {
//       //       test: /[\\/]node_modules[\\/]/,
//       //       name(module) {
//       //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
//       //         return `chunk.${packageName.replace('@', '')}`;
//       //       },
//       //       priority:10
//       //     }
//       //   }
//       // })
//       // config.plugins.push(
//       //   new UglifyJsPlugin({
//       //     uglifyOptions: {
//       //       compress: {
//       //         drop_debugger: true,
//       //         drop_console: true
//       //       }
//       //     },
//       //     warnings: false,
//       //     sourceMap: false,
//       //     parallel: true
//       //   })
//       // )
//     } else {
//       // 为开发环境修改配置...
//     }
//   }
// }

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    configureWebpack: config => {
        config.plugins.push(new MonacoWebpackPlugin())
    }
}
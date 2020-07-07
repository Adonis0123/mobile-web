const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin') // 引入删除console插件
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.VUE_APP_BUILD_PATH, // 打包后的文件地址
  outputDir: process.env.VUE_APP_FILE_Name, // 打包的文件夹名字
  assetsDir: 'static',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        optimization: {
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                ecma: undefined,
                warnings: false, // 传递true以在中返回压缩机警告result.warnings。使用该值可"verbose"获取更详细的警告。
                parse: {},
                compress: {
                  drop_console: true, // 移除console
                  drop_debugger: true, // 移除debugger
                  pure_funcs: ['console.log'] // 移除console
                }
              }
            })
          ]
        },
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            // 超过10k才压缩
            threshold: 10240,
            // 是否删除源文件
            deleteOriginalAssets: false
          })
          // new BundleAnalyzerPlugin()
        ]
      }
    }
  },

  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],
  // 生产环境 sourceMap,打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                vantUI: {
                  name: 'chunk-vantUI',
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /vant/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
    config.resolve.alias
      .set('@', resolve('src'))
      .set('imgs', resolve('src/assets/imgs'))
      .set('components', resolve('src/components/index.js'))
      .set('http', resolve('src/http'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
  },
  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中 设置为true的话修改样式不会立即生效
    extract: false,
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        // lessOptions: {
        modifyVars: {
          // // 直接覆盖变量
          // 'text-color': 'red',
          // 'border-color': '#eee',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          'hack': `true; @import "${resolve('./src/assets/css/styles/vant.less')}";`
        }
        // }
      }
    }
  },
  devServer: {
    open: false, // 运行项目时自动启动浏览器,
    port: 666, // 端口号
    https: false,
    hot: true, // 模块热替换(HMR - hot module replacement)功能会在应用程序运行过程中，替换、添加或删除 模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度
    hotOnly: false, // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
    overlay: {
      warnings: false, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,如果想要显示警告和错误
      errors: true
    },
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://www.lgjkzx.cn/uduhs-web', // 中医院地址
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        ws: true,
        pathRewrite: { // 表示的意思是把/api 替换为空，用在如果你的实际请求地址没有api的情况)
          '^/api': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    },
    before: app => { }
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/css/styles/global.less') // 需要全局导入的less
      ]
    })
}

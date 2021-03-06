import fs from 'fs-extra'
import path from 'path'
import map from 'lodash/map'
import forEach from 'lodash/forEach'
import filter from 'lodash/filter'
import indexOf from 'lodash/indexOf'
import webpack, { DefinePlugin } from 'webpack'
import WebpackMerger from 'webpack-merge'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WebpackConfig from './webpack.common.config.babel'
import { srcDir, distDir, tmpDir } from './variables'

const { UglifyJsPlugin } = webpack.optimize

let bootFile = path.join(tmpDir, './bootstrap.spec.js')
let cmpDir = path.join(srcDir, './components')
let files = []

forEach(fs.readdirSync(cmpDir), (folderName) => {
  let folder = path.join(cmpDir, folderName)
  if (fs.statSync(folder).isDirectory()) {
    let file = path.join(folder, '/index.js')
    fs.existsSync(file) && files.push(file)
  }
})

let source = map(files, (file) => `import '${file}';`).join('\n')

fs.ensureFileSync(bootFile)
fs.writeFileSync(bootFile, source)

/**
 * Filter CommonsChunkPlugin
 * docs: https://github.com/webpack-contrib/karma-webpack/issues/24
 */
WebpackConfig.plugins = filter(WebpackConfig.plugins, (plugin) => {
  let index = indexOf(['CommonsChunkPlugin', 'HtmlWebpackPlugin', 'ExtractTextPlugin'], plugin.constructor.name)
  return index === -1
})

export default WebpackMerger(WebpackConfig, {
  devtool: 'source-map',
  entry: {
    index: [
      'babel-polyfill',
      bootFile
    ]
  },
  output: {
    filename: '[name].js',
    umdNamedDefine: false
  },
  module: {
    noParse: [
      /[/\\]node_modules[/\\]angular/
    ]
  },
  plugins: [
    /**
     * Define some global variables
     */
    new DefinePlugin({
      'process.env': {
        production: JSON.stringify(true)
      }
    }),

    /**
     * Extract style file
     * Inline styles can be externally optimized for loading
     */
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true
    }),

    /**
     * Compress js files
     */
    new UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),

    /**
     * Copy files
     */
    new CopyWebpackPlugin([
      {
        context: srcDir,
        from: '+(components|share|stylesheets|controllers)/**',
        to: path.join(distDir, './')
      }
    ])
  ]
})

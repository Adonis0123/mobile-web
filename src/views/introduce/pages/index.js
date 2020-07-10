// /*
//  * @Author: Hzh
//  * @Date: 2020-07-10 13:23:11
//  * @LastEditTime: 2020-07-10 13:23:44
//  * @LastEditors: Hzh
//  * @Description:
//  */

// const componentFiles = require.context('./', true, /\index.vue$/)

// const components = componentFiles.keys().reduce((files, filePath) => {
//   const fileName = filePath.replace(/^\.\/(.*)\/index\.\w+$/, '$1')
//   const value = componentFiles(filePath)
//   files[fileName] = value.default
//   return files
// }, {})

// /* 为了按需引入 */
// module.exports = components

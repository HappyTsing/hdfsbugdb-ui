// 原本就有的
const { defineConfig } = require("@vue/cli-service");

// element plus自动导入
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

// svg-sprite-loader
const path = require("path");
// 定义resolve方法，获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  // 暂时关闭eslint
  lintOnSave: false,
  // element plus 自动按需导入
  configureWebpack: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },

  chainWebpack: (config) => {
    // 配置svg默认规则排除icons目录中svg文件处理
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
  /* 方案一，不推荐，代理所有请求
  devServer: {
    proxy: "http://localhost:3001",
  },
  */

  /* 方案二 */
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        ws: true, // 用于支持websocket
        changeOrigin: true, // 代理服务器 告诉 服务端 它（代理服务器） 的端口号是和服务端一样的。
        // 例如：前端8080端口， 后端3001端口。如果changeOrigin为true，则服务器收到的请求是来自3001端口的，如果为false，则服务器收到的请求是8080端口的.
        // 可以理解为端口欺骗。本质是控制请求头中的host值

        // ws 和 changeOrigin 两个配置默认为true，因此可以不配置。
      },
    },
  },
});

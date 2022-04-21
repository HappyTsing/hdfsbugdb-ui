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
});

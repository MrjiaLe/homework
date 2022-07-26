const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9999,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://upload.9yuecloud.com:8887",
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: "",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import './src/styles/scssconfig.scss';",
      },
    },
  },
});

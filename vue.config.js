// 短路径配置
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("utils", "@/utils");
  },
  // 配置服务器地址
  devServer: {
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8095",
        // target: "http://192.168.0.26:8080",
        changeOrigin: true,
        pathRewrite: { "^/api/": "/" }
      }
    }
  }
};

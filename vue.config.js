const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set("@assets", resolve("src/assets"))
      .set("@views", resolve("src/views"))
      .set("@network", resolve("src/network"))
      .set("@components", resolve("src/components"))
      .set("@common", resolve("src/common"));
  },
};

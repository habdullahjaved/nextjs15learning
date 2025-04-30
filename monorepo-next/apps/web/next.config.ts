const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias["@ui"] = path.resolve(__dirname, "../../packages/ui");
    config.resolve.alias["@utils"] = path.resolve(
      __dirname,
      "../../packages/utils"
    );
    return config;
  },
};

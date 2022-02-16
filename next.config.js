module.exports = {
  webpack(config) {
    config.module.rules.push({
      // 웹팩 설정에 로더 추가
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
};

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add TypeScript loader for .tsx files
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true, // Set to true if you're experiencing performance issues
        },
      },
    });

    // Resolve .ts and .tsx file extensions
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};

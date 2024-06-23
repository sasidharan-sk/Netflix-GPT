// postcss.config.js
module.exports = {
  plugins: {
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-properties": true,
      },
    },
    tailwindcss: {},
    // Add other PostCSS plugins here if needed
  },
};

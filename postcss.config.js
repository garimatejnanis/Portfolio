module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      defaultExtractor: (content) => content.match(/[\w-/:%]+(?<!:)/g) || [],
      safelist: {
        standard: [/^swiper/, /^show$/, /^collaps/, /^fade$/, /^active$/],
        deep: [/pulse-verde/],
      },
    },
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};
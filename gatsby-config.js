module.exports = {
  siteMetadata: {
    title: `ElArizona`,
    description: `ElArizona is a leading bakery in the middle east. Known for its top-notch baked goods especially warm bread.`,
    author: `@elarizona`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ar`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `AIzaSyDKY0k0xH9yQ9oElk7VZX0iqh2_HlC3P9g`,
        center: `Cairo, Egypt`
      }
    }
  ],
};

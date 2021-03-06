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

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/logo-square.png",
      },
    },
    `gatsby-plugin-react-leaflet`,
  ],
};

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
//		{
//      resolve: `gatsby-plugin-manifest`,
//      options: {
//        start_url: "/",
//        background_color: "#ffffff",
//        theme_color: "#ffffff",
//        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
//        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
//        display: "standalone",
//        icon: "src/assets/favicon.png", // This path is relative to the root of the site.
//      },
//    },
  ],

  siteMetadata: {
    title: "Jingchao Zhou",
  },
};

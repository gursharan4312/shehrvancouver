module.exports = {
  siteMetadata: {
    title: "ShehrVancouver",
    description: "",
    author: "Gursharan Singh",
    siteUrl: "https://shehrvancouver.netlify.app",
  },

  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
  ],
};

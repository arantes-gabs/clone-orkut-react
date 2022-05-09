const rucksack = require("rucksack-css")
const lost = require("lost")
const autoprefixer = require("autoprefixer")
const rupture = require("rupture")
const env = require("./env")

const gatsbySourceFilesystemFonts = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `fonts`,
    path: `${__dirname}/static/fonts`,
  },
}

const gatsbySourceFilesystemImg = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/static/images`,
  },
}

const gatsbyPluginPageCreator = {
  resolve: `gatsby-plugin-page-creator`,
  options: {
    path: `${__dirname}/src/pages`,
    ignore: {
      patterns: [`**/*`],
    },
  },
}

const gatsbyPluginSvg = {
  resolve: "gatsby-plugin-react-svg",
  options: {
    rule: {
      exclude: /components/,
      options: {
        props: {
          className: "icon",
        },
      },
    },
  },
}

const gatsbyPluginFontObserver = {
  resolve: "gatsby-plugin-font-observer",
}

module.exports = {
  plugins: [
    `gatsby-plugin-split-css`,
    gatsbyPluginFontObserver,
    gatsbySourceFilesystemFonts,
    gatsbySourceFilesystemImg,
    gatsbyPluginPageCreator,
    gatsbyPluginSvg,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-env-variables`,
    `gatsby-alias-imports`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
    `gatsby-plugin-image`,
  ],
}

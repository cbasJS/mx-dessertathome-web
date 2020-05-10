// Packages
const _ = require('lodash')

// Assets
const baseConfig = require('./src/data/config/environments/base.json')
const developmentConfig = require('./src/data/config/environments/development.json')
const productionConfig = require('./src/data/config/environments/production.json')
const stagingConfig = require('./src/data/config/environments/staging.json')

const configs = {
  development: _.merge({}, baseConfig, developmentConfig),
  staging: _.merge({}, baseConfig, developmentConfig, stagingConfig),
  production: _.merge({}, baseConfig, developmentConfig, stagingConfig, productionConfig)
}

const environment = process.env.GATSBY_ACTIVE_ENV || 'development'

const config = configs[environment]

const gatsbyConfig = {
  siteMetadata: {
    title: 'mx-beerhouse',
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: config.shopify.subdomain,
        accessToken: config.shopify.accessToken,
        verbose: true,
        apiVersion: config.shopify.apiVersion,
        paginationSize: 50,
        includeCollections: config.shopify.includeCollections
      }
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: config.prismic.repositoryName
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['styledComponents.ts']
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `https://${config.shopify.subdomain}.myshopify.com/api/graphql`,
        headers: {
          'X-Shopify-Storefront-Access-Token': config.shopify.accessToken
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.app.url,
        sitemap: `${config.app.url}/sitemap.xml`,
        policy: config.environment === 'production' ?
          [
            { userAgent: '*', disallow: '/' }
          ] :
          [
            { userAgent: '*', disallow: '/' }
          ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Postre a domicilio',
        short_name: 'Postre a domicilio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        // icon: ''
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],
}

module.exports = gatsbyConfig

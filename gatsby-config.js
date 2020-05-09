module.exports = {
  siteMetadata: {
    title: 'mx-dessertathome-web',
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'dessert-at-home',
        accessToken: '25b87c0c6be6c70a4ed8d89f07e148a2',
        includeCollections: ['shop']
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://dessert-at-home.myshopify.com/api/graphql',
        headers: {
          'X-Shopify-Storefront-Access-Token': '25b87c0c6be6c70a4ed8d89f07e148a2'
        }
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
        display: 'standalone'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript'
  ],
}

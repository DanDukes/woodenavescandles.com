require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');
//test
module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: true,
        enableWebp: true,
        imageQuality: '95',
        gatsbyImageProps: {
          loading: 'eager',
          fadeIn: false,
          durationFadeIn: 500,
        },
        manifest: {
          name: 'Wooden Avenues Candle Company',
          short_name: 'Wooden Aves Candle Co',
          start_url: '/',
          background_color: '#f7f7e8',
          theme_color: '#f7f7e8',
          display: 'standalone',
          icon: 'src/images/Creative-Tail-Halloween-candle.svg.png',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://woodenavescandles.com',
    gatsbyStorefrontConfig: {
      storeName: 'Wooden Avenues Candle Co',
      storeDescription: 'Handcrafted Candles',
      email: 'info@woodenavescandles.com',
      company: 'Wooden Avenues LLC',
      location: 'Salt Lake City, UT',
      address: '500 E 3rd Avenue',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Winter Candles',
              type: 'collection',
              handle: 'winter-candles',
              textColor: 'White',
              textBgColor: 'primary',
            },
            {
              name: 'Small Candles',
              type: 'collection',
              handle: 'small-candles',
              textColor: 'White',
              textBgColor: 'primary',
            },
            {
              name: 'Large Candles',
              type: 'collection',
              handle: 'large-candles',
              textColor: 'White',
              textBgColor: 'primary',
            },
          ],
        },
        {
          name: 'Small Purple Candle',
          type: 'product',
          handle: 'small-purple-candle',
          textColor: 'White',
          textBgColor: 'primary',
        },
        {
          name: 'Small Grey Candle',
          type: 'product',
          handle: 'small-grey-candle',
          textColor: 'White',
          textBgColor: 'primary',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
              {
                name: 'Winter Candles',
                type: 'collection',
                handle: 'winter-candles',
              },
              {
                name: 'Large Candles',
                type: 'collection',
                handle: 'large-candles',
              },
              {
                name: 'Small Candles',
                type: 'collection',
                handle: 'small-candles',
              }
        ],
      }),
      footerLinks: [
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'Website by Dan DeGeare',
          link: 'http://www.degeare.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};

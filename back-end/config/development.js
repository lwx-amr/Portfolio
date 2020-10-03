require('dotenv').config()
module.exports = {
  app: {
    name: 'Portfolio website',
    baseUrl: `http://localhost:`,
    port: process.env.PORT || 3010
  },
  client: {
    url: process.env.CLIENT || 'http://localhost:3000'
  },
  api: {
    prefix: '^/api/v[1-9]',
    version: [1]
  },
  database: {
    url: process.env.DB_URL || 'mongodb://localhost/portfolio'
  }
}

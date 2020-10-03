import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import RateLimit from 'express-rate-limit'
import config from 'config'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import mainRoutes from './api/mainRoutes'

// load configurations
const port = config.get('app.port')
const db = config.get('database.url')
const prefix = config.get('api.prefix')
const app = express()
const corsOptions = {
  origin: config.get('client.url'),
  credentials: true
}

// Using helmet to increase security
app.use(helmet())

// Enable cors
app.use(cors(corsOptions))

// Enable cookie parser
app.use(cookieParser())

// Using Limiter to prevent attacks
new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 min is the time of our cycle
  max: 100, // Max number of requests
  delayMs: 0 // Disable delay between each request
  // This mean each ip will be able to make only 100 request in each 15 min and there is no delay between requests
})

// Express Parser setup
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Setup mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Calling service routes
app.use(prefix, mainRoutes)

// Running server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// Export port
module.exports = app

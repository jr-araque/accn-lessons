//Get ENV configurations
const CONFIG = require('./config/' + (process.env.NODE_ENV || 'development') + '.js')
// Get Express Module
const express = require('express')
// Adds GZip Compression
const compression = require('compression')
// Adds Logger
const logger = require('winston')
// Get Lessons Metadata
const LESSONS = require('./src/utils/lessons.js')

// Instantiate Express App
const app = express()
// Instantiates Router
const router = express.Router();
/*
 * Server Prod Config
 */
app.use(compression())

// Set View Engine Handlebars & View Directory on src/views
app.set('view engine', 'hbs')
app.set('views', __dirname + '/src/views')

// Serve Static Assets
app.use(express.static( __dirname + '/public'))

// Separate to Individual Lessons
const jsEnv = LESSONS.jsEnv;
const ngRouting = LESSONS.ngRouting;
const unitTesting = LESSONS.unitTesting;

// Logging Middleware
router.use((req, res, next) => {
    logger.info(req.method, req.url);
    next();
});

/**
 ** LESSON ROUTE CONFIGURATIONS
 ============================================== **/

// JS Environment
router.get(jsEnv.endPoint, (req, res) => { // Client
    res.render(jsEnv.dirName + '/index', { multiplex: jsEnv.socketConfig, master: false })
})
router.get(`${jsEnv.endPoint}/master`, (req, res) => { // Master (Works only on localhost)
    res.render(jsEnv.dirName + '/index', { multiplex: jsEnv.socketConfig, master: true })
})

// Angular Routing
router.get(ngRouting.endPoint, (req, res) => { // Client
    res.render(ngRouting.dirName + '/index', { multiplex: ngRouting.socketConfig, master: false })
})
router.get(`${ngRouting.endPoint}/master`, (req, res) => { // Master (Works only on localhost)
    res.render(ngRouting.dirName + '/index', { multiplex: ngRouting.socketConfig, master: true })
})

// Unit Testing
router.get(unitTesting.endPoint, (req, res) => { // Client
    res.render(unitTesting.dirName + '/index', { multiplex: unitTesting.socketConfig, master: false })
})
router.get(`${unitTesting.endPoint}/master`, (req, res) => { // Master (Works only on localhost)
    res.render(unitTesting.dirName + '/index', { multiplex: unitTesting.socketConfig, master: true })
})

/** ==============================================
 **  END - LESSON ROUTE CONFIGURATIONS
 **/

// Main Route
router.get('/', (req, res) => {
    res.render('index', { LESSONS })
})

// Actually use the router
app.use('/', router)

// Start Server
app.listen(CONFIG.PORT, (err) => {
    if (err) logger.error(err)
    logger.info(`Successfully started at port ${CONFIG.HOST}:${CONFIG.PORT}...`)
})

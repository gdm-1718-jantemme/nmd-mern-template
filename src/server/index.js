/*
Import configuration
*/
import config from './config';

/*
Import the external libraries:
- http
- https
- express
- morgan
- chalk
*/
import http from 'http';
import https from 'https';
import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';

/*
Import internal libraries
- apiV1Router
*/
import apiV1Router from './api/v1/routes';

// Morgan middleware
const morganMiddleware = morgan((tokens, req, res) => {
    return [
        '\n',
        chalk.hex('#ff4757').bold('🍄  Morgan --> '),
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '',
    ].join(' ');
  });

// Create the express application
const app = express();
app.use(morganMiddleware);
app.use('/api/v1', apiV1Router);

// Last route is 404
app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error); 
});

// Global Application Error Handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    const obj = {
        error: {
            message: error.message,
            status: error.status,
            timestamp: new Date().getTime()
        }
    }
    if(req.xhr) {
        return res.json(obj);
    } else {
        return res.send('Ocharme!');
    }
});

// Create the http Node.js server
const httpServer = http.Server(app);

// Launch the http server: ip and port
httpServer.listen(config.nodePort, config.nodeHostname, () => {
    console.log(`Server is running at http://${config.nodeHostname}:${config.nodePort} !`);
});
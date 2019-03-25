/*
Import configuration
*/
import config from './config';

/*
Import the external libraries:
- http
- https
- express
*/
import http from 'http';
import https from 'https';
import express from 'express';

/*
Import internal libraries
- apiV1Router
*/
import apiV1Router from './api/v1/routes';

// Create the express application
const app = express();
app.use('/api/v1', apiV1Router);

// Create the http Node.js server
const httpServer = http.Server(app);

// Launch the http server: ip and port
httpServer.listen(config.nodePort, config.nodeHostname, () => {
    console.log(`Server is running at http://${config.nodeHostname}:${config.nodePort} !`);
});
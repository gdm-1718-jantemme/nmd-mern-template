/*
Import the external libraries:
- express
*/
import express from 'express';

/*
Import the internal libraries:
- post.routes.js
*/
import postRouter from './post.routes';

// Define and initiate an express router
const apiV1Router = express.Router();
postRouter(apiV1Router);

export default apiV1Router;
import express from 'express';
import bodyParser from 'body-parser';
import { coreRouter } from './core/Router';


import  isImageURL from 'image-url-validator';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  //core router for the endpoints
  app.use('/', coreRouter);

  
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}");
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
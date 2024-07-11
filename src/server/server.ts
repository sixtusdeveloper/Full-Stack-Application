 import express from 'express';


 const server = express();

 server.use(express.static('dist'));    // Serve the static files from the dist folder

 server.listen("8080", "0.0.0.0", () => {
   console.info('Server is listening at https://0.0.0.0:8080');
 });
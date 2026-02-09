import dotenv from 'dotenv';
import app from './src/app.mjs';

dotenv.config(); 
// This line loads environment variables from a .env file into process.env, allowing you to access them in your application.

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 
// This code starts the Express server and listens for incoming requests on the specified port. It uses the PORT variable, which is either obtained from the environment variables or defaults to 5000 if not set. When the server is successfully started, it logs a message to the console indicating that the server is running and on which port it is listening.
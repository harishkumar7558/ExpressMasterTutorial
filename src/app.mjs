import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './router/user.router.mjs';

// load environment variables from .env file

const app = express(); 
// create a new Express application


app.use(express.json()); 
// allow to parse json data from request body

app.use(express.urlencoded({extended:true})); 
// allow to parse urlencoded data from request body

app.use(helmet());
 // Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help mitigate some common web vulnerabilities. By default, Helmet includes 11 middleware functions that set security-related HTTP headers, such as Content-Security-Policy, X-Frame-Options, and X-XSS-Protection. You can also configure Helmet to include additional middleware functions or to disable certain headers if needed.

app.use(morgan('dev')); 
// morgan is a HTTP request logger middleware for node.js. It simplifies the process of logging requests to your application. By default, it logs the method, URL, status code, response time, and other details of each incoming request. You can also configure morgan to use different formats or to log specific information based on your needs.

app.use(cors());
 // CORS (Cross-Origin Resource Sharing) is a mechanism that allows web applications running on one domain to access resources from a different domain. The cors middleware in Express.js is used to enable CORS for your application. By default, it allows all origins to access your resources, but you can also configure it to allow specific origins, methods, or headers as needed.


app.use("/api",router);





export default app;

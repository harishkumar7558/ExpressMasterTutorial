import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

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

const users = [
    {id:1,name:'kishore'},
    {id:2,name:'sai'},
    {id:3,name:'ram'},
    {id:4,name:'kishorekumar'},    
] // This is a simple in-memory array to store user data. In a real application, you would typically use a database to persist user information.

app.get('/',async(req,res)=>{
    try{
        const user = users;
        if(!user){
            return res.status(400).json({message:'No user found'});
        } 
        res.status(200).json({message:'success',data:user});
    }
    catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}) // This is a simple API endpoint that returns a list of users. It uses the GET method and responds with a JSON object containing a message and the user data. If there are no users found, it returns a 400 status code with an appropriate message. If there is an internal server error, it returns a 500 status code with an error message.

app.post("/",async(req,res)=>{
    try{
        const data = req.body || {};
       
        const user = users;
        
        const filterdata = user.find((item)=>item.name === data.name);
        if(filterdata){
            return res.status(400).json({message:'User already exists'});
        }
        const newUser = {
            id: user.length + 1,
            name: data.name
        }
        user.push(newUser);
        res.status(200).json({message:'success',data:user});
    }
    catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}) // This is a simple API endpoint that allows you to create a new user. It uses the POST method and expects a JSON object in the request body containing the user's name. The endpoint checks if a user with the same name already exists in the users array. If it does, it returns a 400 status code with an appropriate message. If not, it creates a new user object with a unique ID and adds it to the users array, then responds with a success message and the updated list of users. If there is an internal server error, it returns a 500 status code with an error message.

app.get("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const user =users;
        const filterdata = user.find((item)=>item.id=== parseInt(id));
        if(!filterdata){
            return res.status(400).json({message:'User not found'});
        }
        res.status(200).json({message:'success',data:filterdata});
    }
    catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}) // This is a simple API endpoint that allows you to retrieve a user by their ID. It uses the GET method and expects the user ID to be provided as a URL parameter. The endpoint checks if a user with the specified ID exists in the users array. If it does, it returns a success message along with the user data. If not, it returns a 400 status code with an appropriate message. If there is an internal server error, it returns a 500 status code with an error message.

app.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const user = users;
        const filterdata = user.filter((item)=>item.id !== parseInt(id));
        if(!filterdata){
            return res.status(400).json({message:'User not found'});
        }
        
        res.status(200).json({message:'success',data:filterdata});
    }
    catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}) // This is a simple API endpoint that allows you to delete a user by their ID. It uses the DELETE method and expects the user ID to be provided as a URL parameter. The endpoint filters the users array to remove the user with the specified ID. If the user is not found, it returns a 400 status code with an appropriate message. If the user is successfully deleted, it returns a success message along with the updated list of users. If there is an internal server error, it returns a 500 status code with an error message.


export default app;

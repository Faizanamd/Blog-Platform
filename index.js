import express from "express";
import ejsLayout from 'express-ejs-layouts';
import path from "path";
import { uploadFile } from "./src/middleware/fileupload.middleware.js";

// Creating app using Express
const app = express();
// setting up public to use storage and manipulate data
app.use(express.static('public'));


// Creating instance of BlogController for default page
import BlogController from "./src/controllers/Blog.Controller.js";
const blogController = new BlogController();


//setting up views to render ejs type files
app.use(ejsLayout);
app.set('view engine', 'ejs');
app.set("views", path.join(path.resolve(), 'src', 'views'))

// Parsing JSON and URL-encoded data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes for home page
app.get('/',blogController.homePage)
app.get('/register', blogController.register);
app.post('/signup',uploadFile.single('profilePicture'), blogController.signup);

export default app;
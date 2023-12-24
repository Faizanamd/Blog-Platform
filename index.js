import express from "express";
import ejsLayout from 'express-ejs-layouts';
import path from "path";
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


// routes for home page
app.get('/',blogController.homePage)


export default app;
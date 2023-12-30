import UserRepository from "../models/user.repository.js";
const userRepository = new UserRepository();

export default class BlogController{
    homePage(req, res){
        res.render("home")
    }
    register(req, res){
        res.render("register");
    }
    async signup(req, res){
        try{
            console.log(req.body);
            await userRepository.singup(req.body);
            res.render('home');
        }catch(err){
            res.redirect('/');
        }
       
    }
    async singin(req, res){
        try{
            console.log(req.body);
            await userRepository.signin(req.body);
            console.log("usr logged in")
            req.session.userEmail = req.body.email;
            res.render('home');
        }catch(err){
            console.log(err);
            res.redirect('/')
        }
    }
}
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
}
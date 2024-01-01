import UserRepository from "../models/user.repository.js";
const userRepository = new UserRepository();

export default class BlogController{
    homePage(req, res){
        res.render("home", {user:null, userEmail: null})
    }
    register(req, res){
        res.render("register", {user:null, userEmail: null} );
    }
    async signup(req, res){
        try{
            console.log(req.body);
            const user = req.body;
            const url = 'documents/' + req.file.filename;
            user.profilePicture = url;
            console.log("url isl ", req.file.filename);
            console.log("user ", user);
            await userRepository.singup(req.body);
            res.render('home', {user:null, userEmail: null});
        }catch(err){
            res.redirect('/');
        }
    }
    async singin(req, res){
        try{
            console.log(req.body);
            const user = await userRepository.signin(req.body);
            console.log("usr logged in")
            req.session.userEmail = req.body.email;
            // const url = 'documents/' + req.file.filename;
            // console.log("url isl ", req.file.filename);
            
            console.log("user ", user);
            res.render('home', {user:user, userEmail: req.session.userEmail});
        }catch(err){
            console.log(err);
            res.redirect('/')
        }
    }
}
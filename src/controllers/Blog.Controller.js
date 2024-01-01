import UserRepository from "../models/user.repository.js";
const userRepository = new UserRepository();

export default class BlogController {
    homePage(req, res) {
        res.render("home", { user: null, userEmail: null, warning: null })
    }
    register(req, res) {
        res.render("register", { user: null, userEmail: null, warning: null });
    }
    async signup(req, res) {
        try {
            console.log(req.body);
            const user = req.body;
            const url = 'documents/' + req.file.filename;
            user.profilePicture = url;
            // console.log("url isl ", req.file.filename);
            // console.log("user ", user);
            await userRepository.singup(req.body);
            res.render('home', { user: null, userEmail: null, warning: "Your account has been successfully created!" });
        } catch (err) {
            res.redirect('/');
        }
    }
    async singin(req, res) {
        try {
            console.log(req.body);
            const user = await userRepository.signin(req.body);
            console.log(user);
            if (user === "EmailNotFound") {
                res.render('home', { user, userEmail: req.session.userEmail, warning: "Email Not Found" });
            } else if (user === "PasswordNotMatched") {
                res.render('home', { user, userEmail: req.session.userEmail, warning: "Password Not Matched" });
            } else {
                // Email and password match
                console.log("User logged in");
                req.session.userEmail = req.body.email;
                res.render('home', { user, userEmail: req.session.userEmail, warning: null });
            }
        } catch (err) {
            console.log(err);
            res.redirect('/');
        }
    }
}
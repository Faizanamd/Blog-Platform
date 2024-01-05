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
            if (req.file && req.file.filename) {
                const url = 'documents/' + req.file.filename;
                user.profilePicture = url;
            }else{
                user.profilePicture = null;
            }
            // console.log("url isl ", req.file.filename);
            // console.log("user ", user);
            await userRepository.signup(req.body);
            res.render('home', { user: null, userEmail: null, warning: "Your account has been successfully created!" });
        } catch (err) {
            res.render('home', { user: null, userEmail: null, warning: "something went wrong! Please try again" });
        }
    }
    async singin(req, res) {
        try {
            console.log(req.body);
            const user = await userRepository.signin(req.body);
            console.log(user);
            if (user === "EmailNotFound") {
                res.render('home', { user: null, userEmail: req.session.userEmail, warning: "Email Not Found" });
            } else if (user === "PasswordNotMatched") {
                res.render('home', { user: null, userEmail: req.session.userEmail, warning: "Password Not Matched" });
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
    async logoutCont(req, res) {
        try {
            // Clear the session data (assuming you're using Express session middleware)
            req.session.destroy((err) => {
                if (err) {
                    console.error("Error destroying session:", err);
                } else {
                    // Redirect the user to the home page or any other desired page after logout
                    res.redirect('/');
                }
            });
        } catch (err) {
            console.error("Error during logout:", err);
            res.redirect('/');
        }
    }
}
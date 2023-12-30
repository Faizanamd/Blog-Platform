

export default class BlogController{
    homePage(req, res){
        res.render("home")
    }
    register(req, res){
        res.render("register");
    }
}
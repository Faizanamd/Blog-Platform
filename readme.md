
# Blog Platform

This project is a blog platform developed using Express.js, a web framework for Node.js. Leveraging EJS as the template engine, the platform enables dynamic content rendering on the server side. The structure includes a "public" directory for static assets, and a "BlogController" class manages routes and blog-related logic. EJS layouts are employed for view rendering, and the application serves a home page ("/") through the homePage method of the BlogController. Notably, the setup incorporates static file middleware, EJS layouts, and specifies the view engine and location. This minimalistic blog platform lays the groundwork for further customization and extension by incorporating additional features and functionalities.
```
project-root/
│
├── src/
│ ├── controllers/
│ │ ├── HomeController.js
│ │ └── BlogController.js
│ ├── views/
│ │ ├── home.ejs
│ │ ├── blog/
│ │ │ └── post.ejs
│ ├── models/
│ │ ├── User.js
│ │ └── Post.js
│ └── app.js
│
├── public/
│ ├── styles/
│ │ └── main.css
│ ├── scripts/
│ │ └── app.js
│ └── images/
│ └── logo.png
│
├── tests/
│ ├── unit/
│ │ └── test_home_controller.js
│ ├── integration/
│ │ └── test_blog_controller.js
│ └── helpers/
│ └── test_utils.js
│
├── config/
│ ├── database.json
│ ├── settings.json
│ └── routes.json
│
├── README.md
├── package.json
└── .gitignore

## Installation

Install my-project with npm

```bash
    git clone https://github.com/Faizanamd/Blog-Platform
    npm Install
    npm start
```
    
## Authors

- [@Faizanamd](https://github.com/Faizanamd)
- [@Linkedin](https://www.linkedin.com/in/fxan-thues/)


## Deployment

To deploy this project run
```bash
  render.com
```

# Your Project Name

Welcome to [Your Project Name]! This project [provide a brief project description].

## How to Contribute

We appreciate your interest in contributing to [Your Project Name]! Follow the guidelines below to make the contribution process smooth and effective.

### Contribution Process

We follow a fork and branch workflow for contributions. There are three Git repositories involved:

1.  **upstream** - the [Your Project Name] repository on GitHub.
2.  **origin** - your GitHub fork of `upstream`.
3.  **local** - your local clone of `origin`

#### First Time Setup

Follow these steps for initial setup:

1.  Fork the `[Your Project Name]` repository on GitHub to create `origin`.
    Visit [Your Project Name][github_project] GitHub repository and click the `Fork` button.

2.  Make a `local` clone of your fork.

    ```shell
    git clone git@github.com:_your_user_name_/[your-repo-name].git
    cd [your-repo-name]
    ```

3.  Add a remote pointing from `local` to `upstream`.

    ```shell
    git remote add upstream git@github.com:[Your Organization]/[your-repo-name].git
    ```

### Making Changes

Follow these steps to make changes to [Your Project Name]:

1. Create a local branch in your clone and pull any recent changes into it.

   ```shell
   git switch -c my_branch  # Pick a name appropriate to your work
   git pull upstream main

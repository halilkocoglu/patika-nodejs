// 3. party packages
const express = require("express");
const mongoose = require("mongoose");
// methodOverride = to simulate delete and put operations
const methodOverride = require("method-override");
// template engine
const ejs = require("ejs");
// core modules
const postController = require("./controllers/postControllers.js");
const pageController = require("./controllers/pageControllers.js");

const port = process.env.PORT || 5000;

const app = express();

// Connect DB

mongoose
  .connect(
    "mongodb+srv://halilkocoglu98:hCUHhyONJo20BK8y@cluster0.yye6efj.mongodb.net/clean-blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["GET", "POST"],
  })
);

// Routes
app.get("/", postController.getAllPosts);

app.get("/post/:id", postController.getSinglePost);

app.post("/post", postController.createPost);

app.put("/post/:id", postController.updatePost);

app.delete("/post/:id", postController.deletePost);

app.get("/about", pageController.getAboutPage);

app.get("/add_post", pageController.getAddPostPage);

app.get("/post", pageController.getPostPage);

app.get("/post/edit/:id", pageController.getEditPostPage);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

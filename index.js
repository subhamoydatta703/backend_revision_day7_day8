const express = require("express");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Rahul",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "Alice",
    content: "JavaScript makes web development so much fun!",
  },
  {
    id: uuidv4(),
    username: "Bob",
    content: "Node.js is perfect for building RESTful APIs.",
  },
  {
    id: uuidv4(),
    username: "Charlie",
    content: "I am currently learning Express and EJS templating.",
  },
  {
    id: uuidv4(),
    username: "Subhamoy",
    content: "Consistency is the key to mastering programming.",
  },
];

app.get("/", (req, res) => {
  // res.send("Working well");
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  console.log(post);

  res.render("show.ejs", { post });
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect(`/posts/${id}`);
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  // patch is used to update a specific post

  let { id } = req.params;
  let newContent = req.body.content;
  console.log(`ID: ${id} and new content: ${newContent}`);
  let post = posts.find((p) => id === p.id);
  // p is a temporary variable and here it checking the post of specific id(by using find())
  // p is a temporary variable representing each post in the array.
  // The find() method returns the post whose id matches the given id.
  post.content = newContent;
  res.redirect("/posts")
});

port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

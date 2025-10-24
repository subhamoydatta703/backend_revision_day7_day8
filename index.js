const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "views")));


let posts = [
  {
    username: "Rahul",
    content: "I love coding!"
  },
  {
    username: "Alice",
    content: "JavaScript makes web development so much fun!"
  },
  {
    username: "Bob",
    content: "Node.js is perfect for building RESTful APIs."
  },
  {
    username: "Charlie",
    content: "I am currently learning Express and EJS templating."
  },
  {
    username: "Subhamoy",
    content: "Consistency is the key to mastering programming."
  }
];



app.get("/",(req, res)=>{
    res.send("Working well");
})
app.get("/posts",(req, res)=>{

    res.render("index.ejs", {posts});
})


port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

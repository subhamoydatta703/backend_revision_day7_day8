const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
  {
    id:"1a",
    username: "Rahul",
    content: "I love coding!"
  },
  {
    id:"1b",
    username: "Alice",
    content: "JavaScript makes web development so much fun!"
  },
  {
    id:"1c",
    username: "Bob",
    content: "Node.js is perfect for building RESTful APIs."
  },
  {
    id:"1d",
    username: "Charlie",
    content: "I am currently learning Express and EJS templating."
  },
  {
    id:"1e",
    username: "Subhamoy",
    content: "Consistency is the key to mastering programming."
  }
];



app.get("/",(req, res)=>{
    // res.send("Working well");
    res.redirect("/posts")
})
app.get("/posts",(req, res)=>{

    res.render("index.ejs", {posts});
})


app.get("/posts/:id", (req, res)=>{
    let { id }=req.params;
    let post = posts.find(p => id === p.id)
    console.log(post);
    console.log("P id: ", post.id);
    console.log("P username: ", post.username);
    console.log("P content: ", post.content);

    res.render("show.ejs",{ post});
})


app.get("/posts/new", (req, res)=>{
    res.render("new.ejs")
})


app.post("/posts", (req, res)=>{
   let { username, content } = req.body;
   posts.push({username, content})
   res.redirect("/posts")
   
})

port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

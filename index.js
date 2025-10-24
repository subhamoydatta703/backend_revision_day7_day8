const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "views")));


app.get("/",(req, res)=>{
    res.send("Working well");
})


port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

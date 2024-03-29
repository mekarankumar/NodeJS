const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 1010;  // Assigning a port number

// Public Static Path
const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs")
app.set("views", view_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

// Getting request routing
app.get("", (req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/weather", (req,res) => {
    res.render("weather");
});

app.get("*", (req,res) => {
    res.render("404error", {
        errMsg: "Page Not Found",
    });
});

// Server listening 
app.listen(port, () => {
    console.log(`This server is running on port number ${port}`);
});
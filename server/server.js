var express = require("express");

var index = require("./routes/index");

var app = express();

var port=5000;

app.listen(port, function(){
    console.log("Server running on port", port);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/tracker", index);

var express =  require("express");
var app = express();

app.get("/index.html", function( req, res ){
    res.send("JJ")
});
app.use(express.static("src"));
app.listen(9999, function(){
    console.log("server is running~!!")
});
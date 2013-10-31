var express = require("express");
var app = express();
app.use(express.logger());
process.env.PWD = process.cwd()
app.use(express.static(process.env.PWD+'/nebula-fox'));
app.set('views', process.env.PWD);
app.engine('html', require('ejs').renderFile);
app.get('/', function(request, response) {
  response.render('nebula-fox/cog.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

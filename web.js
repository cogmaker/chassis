var express = require("express");
var app = express();
var cog_dir = '/nebula-fox';
app.use(express.logger());
process.env.PWD = process.cwd()
app.use(express.static(process.env.PWD + cog_dir));
app.set('views', process.env.PWD);
app.engine('html', require('ejs').renderFile);
app.get('/', function(request, response) {
  response.render(cog_dir + '/cog.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

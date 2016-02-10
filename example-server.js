var express = require('express');
var app = express();

var PORT =3000;
/*app.get('/', function (request, response){
	response.send("Hello Express");
});
*/
var middileWare= require('./middleware');

app.use(middileWare.requireAuthenticatiion);
app.use(middileWare.logger);

app.get('/about', function (req, resp){
	resp.send("About page");
});

console.log(__dirname);

app.use(express.static(__dirname +"/public"));

app.listen(PORT, function (){
	console.log('server has been started' +PORT);
});
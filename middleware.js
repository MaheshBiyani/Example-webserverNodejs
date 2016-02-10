var middileWare= {
		requireAuthenticatiion : function (req, resp , next) {
			console.log("Authentication required " + new Date().toString());
			next();
		},
		logger : function(req, resp, next){
			console.log(req.method);
			next();
		}
}

module.exports=middileWare;
	
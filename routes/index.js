var data = require('../temp.json')

exports.view = function(req, res){
	//console.log(data); //displays data to console
	res.render('index',data);
};


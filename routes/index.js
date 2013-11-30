
/*
 * GET home page.
 */

exports.forward = function(req, res){
	var url = req.path.substring(1);
  	res.render(url);
};
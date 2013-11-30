
/*
 * GET home page.
 */

var fs = require("fs");

exports.forward = function(req, res){
	var url = req.path.substring(1);
    res.render(url);
};

exports.griddata = function(req, res){
	fs.readFile("zipcode.txt", function(err, data) {
		
		var result = [];
		var zipArray = data.toString().split("\n");
		for(var i=0; i<zipArray.length; i++){
			var zipData = zipArray[i].split("\t");
			result.push({
				zipcode: zipData[0],
				sido: zipData[1],
				gugun: zipData[2],
				dong: zipData[3],
				ri: zipData[4],
				building: zipData[5],
				bunji: zipData[6],
				seq: zipData[7]
			});
		}
		res.json(result);
		
	});
};

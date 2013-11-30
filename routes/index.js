
/*
 * GET home page.
 */

var fs = require("fs");

exports.forward = function(req, res){
	var url = req.path.substring(1);
    res.render(url);
};

exports.griddata = function(req, res){
	
	var rows = parseInt(req.query.rows);
	var page = parseInt(req.query.page);
	
	var startNum = rows * (page-1); //시작점 (1page:0, 2page:10, 3page:20)
	
	fs.readFile("zipcode.txt", function(err, data) {
		
		var result = [];
		var zipArray = data.toString().split("\n");
		for(var i=startNum; i<startNum+rows && i<zipArray.length; i++){ //마지막일 경우 딱떨어지지 않음
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
		result.total = result.length;
		res.json({
			records : zipArray.length,
			total: zipArray.length / rows + 1,
			rows: result
		});
		
	});
};

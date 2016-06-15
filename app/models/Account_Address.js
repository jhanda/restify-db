var getAddress = function(req, res) {
	var id_ = req.params.id;

	// select * from Account_Address__c where Id_ like '00170000018AlB0%';
};

var getAddresses = function (req, res) {
    var accountId = req.params.id;
	var orderByCol = req.params.orderByCol;
	var orderByColSort = req.params.orderByColSort;
	var start = req.params.start;
	var end = req.params.end;

    // select * from Account_Address__c where Account__c like '00170000018AlB0%' order by id_ LIMIT 1,5;
};
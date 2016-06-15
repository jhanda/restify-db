var getOpportunity = function(req, res) {
    var id_ = req.params.id;

    // select * from Opportunity where Id_ like '0067000000AN3jTAAT%';
};

var getOpportunities = function (req, res) {
    var orderByCol = req.params.orderByCol;
    var orderByColSort = req.params.orderByColSort;
    var start = req.params.start;
    var end = req.params.end;

    // select * from Opportunity order by Id_ LIMIT 1,5;
};
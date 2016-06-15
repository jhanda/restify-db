
// model definition
var User = sequelize.define("User", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});
 
var createUser = function (req, res) {
    var newUser={
        username: req.body.username,
        password:req.body.password
    }
    User.create(newUser).success(function () {
        res.send(200);
    });
};
 
var getUser = function (req, res) {
    User.findAll().success(function (users) {
       res.send(users);
    });
};
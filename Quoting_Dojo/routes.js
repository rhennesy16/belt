const controller = require("./controller");

module.exports = function(app){
    app.get('/',controller.index);
    app.get('/quotes',controller.show);
    app.post('/quotes',controller.create);
}
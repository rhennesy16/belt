const controller = require("./controller");
module.exports = function(app){
    app.get('/', controller.index);
    app.post('/message', controller.message);
    app.post('/comment/:id', controller.comment);
}
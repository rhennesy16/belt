const controller = require("./controller");
module.exports = function(app){
    app.get('/', controller.index);
    app.get('/animals/new', controller.create);
    app.get('/animals/:id', controller.display);
    app.post('/animals', controller.showall);
    app.get('/animals/edit/:id', controller.update);
    app.post('/animals/:id', controller.show);
    app.post('/animals/destroy/:id', controller.destroy);
}
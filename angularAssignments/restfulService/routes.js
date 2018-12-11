const controller = require("./controller");
module.exports = function(app){
    app.get('/task', controller.allTask),
    app.post('/task/new', controller.newTask),
    app.get('/task/:id', controller.oneTask),
    app.delete('/task/:id', controller.deleteTask),
    app.put('/task/:id', controller.editTask)
}
const controller = require("./controller")

module.exports = function(app){
    app.get("/tasks",controller.allTasks)
    app.post("/tasks",controller.createTasks)
    app.get("/tasks/:id",controller.oneTasks)
    app.put("/tasks/:id",controller.editTasks)
    app.delete("/tasks/:id",controller.deleteTasks)
}
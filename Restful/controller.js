const Restful = require('./models');

module.exports = {
    allTask: function(request, response){
        Task.find()
        .then((data)=>Response.json({data:data}))
        .catch((errds)=>Response.json({err:err}))
    },
    newTask: function(request, response){
        Task.create(request.body)
        .then((data)=>Response.json({data:data}))
        .catch((errds)=>Response.json({err:err}))
    },
    oneTask: function(request, response){
        Task.findById(request.params.id)
        .then((data)=>Response.json({data:data}))
        .catch((errds)=>Response.json({err:err}))
    },
    deleteTask: function(request, response){
        Task.findByIdAndDelete(request.params.id)
        .then((data)=>Response.json({data:data}))
        .catch((errds)=>Response.json({err:err}))
    },
    editTask: function(request, response){
        Task.findByIdAndUpdate(request.params.id, request.body)
        .then((data)=>Response.json({data:data}))
        .catch((errds)=>Response.json({err:err}))
    },
}
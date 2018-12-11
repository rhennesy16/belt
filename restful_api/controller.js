const Task = require("./models")

module.exports = {
    allTasks: (req,res)=>{
        Task.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    createTasks: (req,res)=>{
        Task.create(req.body)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    oneTasks: (req,res)=>{
        Task.findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    deleteTasks: (req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    editTasks: (req,res)=>{
        Task.findByIdAndUpdate(req.params.id,req.body)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

}
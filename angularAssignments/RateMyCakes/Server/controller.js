const Cake = require('./models');

module.exports ={
    cakes: (req,res)=>{
        Cake.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    view: (req,res)=>{
        Cake.findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    new: (req,res)=>{
        Cake.create(req.body)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    update: (req,res)=>{
        Cake.findByIdAndUpdate(req.params.id, {$push: {'reviews':req.body}}, {new:true,upsert:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    destroy: (req,res)=>{
        Cake.findByIdAndDelete(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

}
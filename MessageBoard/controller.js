const Message = require('./models');

module.exports = {
    index: function(request, response){
        Message.find({})
        .then((data)=>response.render('index', {Message:data}))
        .catch((err)=>response.json(err))
    },
    message: function(request, response){
        console.log('posting message...');
        console.log("POST DATA", request.body);
        Message.create(request.body, { runValidators: true })
        .then((data)=>response.redirect('/'))
        .catch((err)=>{
            if(err){
            console.log("We have an error!", err);
            for(var key in err.errors){
                request.flash('registration', err.errors[key].message)
               }response.redirect('/')
            }
        }
        )},
    comment: function(request, response){
        // console.log('posting comment...');
        Message.findByIdAndUpdate(request.params.id, {$push:{comments : request.body}}, { runValidators: true })
        .then((data)=>response.redirect('/'))
        .catch((err)=>{
            if(err){
            // console.log("We have an error!", err);
            for(var key in err.errors){
                for( var k2 in err.errors[key].errors){
                    request.flash('registration', err.errors[key].errors[k2].message)
                }
                // request.flash('registration', err.errors[key].errors)
                console.log(err.errors[key].errors.name.message)
               }response.redirect('/')
            }
        }
        )},
}

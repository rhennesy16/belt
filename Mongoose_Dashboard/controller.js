const Animal = require("./model");

module.exports ={
    index: function(request,response){
        arr = Animal.find({}, function(err, animal) {
            response.render('index', {arr:animal});
        })
    },
    display: function(request,response){
        animal = Animal.findOne({_id: request.params.id}, function(err, animal) {
            console.log(animal);
            response.render('animals', {animal:animal});
        })
    },
    create: function(request,response){
        console.log("where am i")
        response.render("new");
    },
    showall: function(request,response){
        console.log("POST DATA", request.body);
        var animal = new Animal({name: request.body.name, favorite_color: request.body.favorite_color});
        animal.save(function(err) {
          if(err) {
            console.log('something went wrong');
            console.log(animal.errors);
            response.redirect('new')
          } 
          else {
            console.log('successfully added a Animal!');
            response.redirect('/');
          }
        })
    },
    update: function(request,response){
        console.log("POST DATA", request.body);
        Animal.update({_id: request.params.id},
                        {name: request.body.name,
                        favorite_color: request.body.favorite_color},
                        function(err){
                            if(err) {
                                console.log('something went wrong');
                                console.log(animal.errors);
                                response.redirect(`/animals/edit/${request.params.id}`)
                            } 
                            else {
                                console.log('successfully changed a Animal!');
                                response.redirect(`/animals/${request.params.id}`);
                            }
    
        })
        response.render("");
    },
    show: function(request,response){
        Animal.find({}, function(err, users) {
        })
        response.redirect("animals");
    },
    destroy: function(request,response){
        Animal.remove({}, function(err){

        })
        response.redirect("");
    }
}
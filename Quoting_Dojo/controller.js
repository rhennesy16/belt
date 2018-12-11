const Quote = require("./models");



module.exports ={
    index: function(req,res){
        // Quote.find({}, function(err, quotes) {;
        // if(err) {
        //     console.log('something went wrong');
        // } else { 
        //     console.log('successfully shows all Quotes!');
        // }
    
        res.render("index");
        
    },


    show: function(req,res){
        Quote.find({}, function(err, quotes) {;
            if(err) {
                console.log('something went wrong');
            } else { 
                console.log('successfully shows all users!');
            }
        
            res.render("quote", {quotes: quotes});
            });
        },


    create: function(req,res){
        console.log("POST DATA", req.body);
        var quote = new Quote({name: req.body.name, content: req.body.content});
        quote.save(function(err) {
        if(err) {
            console.log('something went wrong');
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        } else { 
            console.log('successfully added a Quote!');
            res.redirect('/quotes');
        }
        })
    
    }

    
}

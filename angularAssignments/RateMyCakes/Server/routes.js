const controller = require('./controller');

module.exports = (app)=>{
    app.get('/cakes', controller.cakes),
    app.get('/cake/:id', controller.view),
    app.post('/cake/new', controller.new),
    app.put('/cake/:id', controller.update),
    app.delete('/cake/:id', controller.destroy)
}
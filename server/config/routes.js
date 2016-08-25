//Require the controller
var main = require('../controllers/main.js');
//////////////////////////////////////////////////////////
//                        Routes                        //
//////////////////////////////////////////////////////////
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    // customers are displayed on a customers page
    // AND index page
    app.get("/customersObjects", function(req, res) {
        // "customers" references the
        // "customers.js" controller and
        // "show" is a method of said
        // "customers.js" controller
        main.show(req, res);
    });


    app.post("/save", function(req, res) {
        main.saveCustomer(req, res);
    });

    app.get("/destroy/:id", function(req, res) {
        main.deleteCustomer(req, res);
    });

    app.get("/productsObjects", function(req, res) {
       main.showProducts(req, res);
    });

    app.get("/ordersObjects", function(req, res) {
        main.showOrders(req, res);
    });

    app.post("/saveOrder", function(req, res) {
        main.saveOrder(req, res);
    });

    app.get("/destroy/order/:id", function(req, res) {
        main.deleteOrder(req, res);
    });



};

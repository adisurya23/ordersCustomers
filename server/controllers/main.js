// mongoose
var mongoose = require('mongoose');
//Retreive the User mongoose object

var Product = mongoose.model("Product");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");


module.exports = (function() {
    return {
        showProducts: function(req, res) {
            Product.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Show Products Error:", err);
                }
                else {
                    res.json(results);
                }
            });
        },

        show: function(req, res) {

            // Show customer documents from the
            // "FullMean" Mongo database
            Customer.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show customers Errors:", err);
                }
                else {
                    res.json(results);
                }

            });
        },

        saveCustomer: function(req, res) {

            var customer = new Customer(req.body);


            customer.save(function(err) {
                if(err) {
                    console.log("saveCustomer Server Controller errors:", customer.errors);

                    res.json({title: "you have errors", errors: customer.errors});
                }
                else {
                    console.log("Customer added:", customer);
                    res.send(true)
                }
            });

        },


        deleteCustomer: function(req, res) {

            Customer.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Customer delete error:", err);
                }
                else {
                    console.log("Customer deleted!");
                    res.redirect("/#customers");
                }

            });

        },
        showOrders: function(req, res) {

            // Show customer documents from the
            // "FullMean" Mongo database
            Order.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show customers Errors:", err);
                }
                else {
                    res.json(results);
                }

            });
        },
        saveOrder: function(req, res) {

            var order = new Order(req.body);


            order.save(function(err) {
                if(err) {
                    console.log("saveOrder Server Controller errors:", order.errors);

                    res.json({title: "you have errors", errors: order.errors});
                }
                else {
                    // console.log("Order saved:", order);

                    console.log("Order added:", order);
                    res.send(true);
                }
            });

        },

        deleteOrder: function(req, res) {
            Order.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Product delete error:", err);
                }
                else {
                    console.log("Product deleted!");
                    res.redirect("/");
                }
            });
        }

    }

})();
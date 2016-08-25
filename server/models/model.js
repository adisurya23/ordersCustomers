var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Create Schema for Users (template ish)
var CustomerSchema = new mongoose.Schema({
    name: { type: String, unique: true, trim: true },
    created_at: {type: Date, default: Date.now}
});

var OrderSchema = new mongoose.Schema({
    name: { type: String },
    product: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now}
});

var ProductsSchema = new mongoose.Schema({
    name: { type: String, trim: true }
});

mongoose.model("Product", ProductsSchema);

// Customer form validations
CustomerSchema.path("name").required(true, "Customer name cannot be blank.");

CustomerSchema.path("name").validate(function(val) {
    return val.length > 1;
}, "Customer name must be two letters or more.");

// Order form validation
OrderSchema.path("name").required(true, "Please select a customer.");

OrderSchema.path("product").required(true, "Please select a product.");

OrderSchema.path("quantity").required(true, "Please select a quantity.");

// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model("Customer", CustomerSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller

mongoose.model("Order", OrderSchema);
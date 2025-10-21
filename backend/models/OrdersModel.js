// const {model} = require("mongoose");


// const OrdersSchema = require("../schemas/OrdersSchema")

// const OrdersModel = new model("order",OrdersSchema);

// module.exports = {OrdersModel}
// AFTER
const { Schema, model } = require("mongoose"); // It's common to define and export the model in one file

const ordersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const OrdersModel = model("Order", ordersSchema);

module.exports = { OrdersModel }; // Export the compiled model
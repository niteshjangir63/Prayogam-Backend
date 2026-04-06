import Order from "../models/Order.js";

export const createOrder = async (req, res) => {

const order = await Order.create({
user: req.user._id,
items: req.body.items,
totalPrice: req.body.totalPrice
});

res.json(order);

};

export const getOrders = async (req, res) => {

const orders = await Order.find({ user: req.user._id })
.populate("items.millet");

res.json(orders);

};
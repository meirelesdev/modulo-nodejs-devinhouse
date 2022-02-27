const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Restaurant = require("../models/Restaurant");
const User = require("../models/User");
const Menu = require("../models/Menu");

class OrderController {
    async index(req, res) {
        try {
            const { restaurant_id } = req.params
            const orders = await Order.findAll({
                attributes:['id','order_number', 'order_date', 'delivery_value'],
                where: {
                    restaurant_id
                },
                include: [
                    {
                        association: 'restaurant',
                        attributes:['id', 'name', 'phone'],
                    },
                    {
                        association: 'client',
                        attributes:['name', 'nickname', 'email'],
                    },
                    {
                        association: 'items',
                        through: {
                            attributes: ['amount', 'value'],
                        }
                    }
                ]
            });
            res.status(200).json({ message: "success", orders});
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "success", error });
        }
    }
    async show(req, res) {
        try {
            const { order_number } = req.params
            const order = await Order.findAll({
                attributes:['id','order_number', 'order_date', 'delivery_value'],
                where: {
                    order_number
                },
                include: [
                    {
                        association: 'restaurant',
                        attributes:['name', 'phone']
                    },
                    {
                        association: 'client',
                        attributes: ['name', 'nickname', 'email']
                    }
                ]
            })
            if(!order) {
                res.json({ message: `Pedido não encontrado`});    
            }
            res.json({ message: "success", order });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "success", error });
        }
    }
    async store(req, res) {
        try {
            const {  delivery_value, restaurant_id, client_id } = req.body;
            const client = await User.findByPk(client_id)
            if(!client) {
                res.json({ message: `Cliente não encontrado`});
            }
            const restaurant = await Restaurant.findByPk(restaurant_id)
            if(!restaurant) {
                res.json({ message: `Restaurante não encontrado`});
            }
            const order = await Order.create({ delivery_value, restaurant_id, client_id });
            res.json({ message: "success", order });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "success", error });
        }
    }
    async update(req, res) {
        try {
            const { order_number } = req.params
            const order = await Order.findOne({
                where: {
                    order_number
                }
            })
            order.order_date = req.body.order_date || order.order_date
            order.restaurant_id = req.body.restaurant_id || order.restaurant_id
            order.client_id = req.body.client_id || order.client_id
            await Order.save()
            res.json({ message: "success", order });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async destroy(req, res) {
        try {
            const { order_number } = req.params
            const order = await Order.findOne({
                where: {
                    order_number
                }
            })
            if(!order) {
                res.json({ message: `Pedido não encontrado`});    
            }
            await order.destroy()
            res.status(200).json();
        } catch (e) {
            res.status(400).json({error: e});
        }
    }
    async add(req, res) {
        try {
            const {order_id} = req.params
            const { menu_id, amount } = req.body
            const order = await Order.findByPk(order_id)
            if(!order){
                res.status(404).json({message: 'Pedido não encontrado.', })    
            }
            const item = await Menu.findByPk(menu_id)
            if(!item) {
                res.status(404).json({message: 'Item não encontrado'})
            }
            const value = Number(amount) * item.price
            const orderItem = await OrderItem.create({menu_id: item.id, order_id: order.id, amount: Number(amount), value })
            res.status(200).json({message: 'success', orderItem})
        } catch (e) {
            res.status(400).json({e})
        }
    }
    async updateItem(req, res) {
        try {
            const {item_id} = req.params
            const { amount } = req.body
            const orderItem = await OrderItem.findByPk(item_id)
            if(!orderItem) {
                res.status(404).json({message: 'Item não encontrado'})
            }
            const item = await Menu.findByPk(orderItem.menu_id)
            if(!item) {
                res.status(404).json({message: 'Item não encontrado'})
            }
            orderItem.value = Number(amount) * item.price
            orderItem.amount = amount
            await orderItem.save()
            res.status(200).json({message: 'success', orderItem})
        } catch (e) {
            res.status(400).json({e})
        }
    }
    async remove(req, res){
        try {
            const {item_id } = req.params
            const orderItem = await OrderItem.findByPk(item_id)
            if(!orderItem){
                res.status(404).json({message: 'Item não encontrado.', })    
            }
            await orderItem.destroy()
            res.status(200).json()
        } catch (e) {
            console.log(e)
            res.status(400).json({e})
        }
    }
}
module.exports = new OrderController();

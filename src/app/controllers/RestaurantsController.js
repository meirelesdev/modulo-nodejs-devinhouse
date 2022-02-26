const Restaurant = require("../models/Restaurant");

class RestaurantsController {
    async index(req, res) {
        try {
            const restaurants = await Restaurant.findAll()
            res.status(200).json({ message: "success", restaurants});
        } catch (error) {
            res.status(400).json({ message: "error", error });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const restaurant = await Restaurant.findByPk(id)
            if(!restaurant) {
                res.json({ message: `Restaurant não encontrado`});    
            }
            res.json({ message: "success", restaurant });
        } catch (error) {
            res.status(400).json({ message: "error", error });
        }
    }
    async store(req, res) {
        try {
            const {name, phone, address_id, category_id} = req.body;
            const restaurant = await Restaurant.create({name, phone, address_id, category_id})
            res.json({ message: "success", restaurant });
        } catch (error) {
            res.status(400).json({ message: "error", error });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            res.json({ message: "success"});
        } catch (error) {
            res.status(400).json({ message: "error", error });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params;
            res.status(200).json();
        } catch (e) {
            res.status(400).json({ error: e });
        }
    }
}
module.exports = new RestaurantsController();

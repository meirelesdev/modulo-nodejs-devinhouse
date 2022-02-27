const Category = require("../models/Category");
const Menu = require("../models/Menu");
const Restaurant = require("../models/Restaurant");

class MenuController {
    async index(req, res) {
        try {
            const menus = await Menu.findAll();
            res.status(200).json({ message: "success", menus });
        } catch (e) {
            res.status(400).json({ message: "error", e });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const menu = await Menu.findByPk(id);
            if (!menu) {
                res.json({ message: `Menu não encontrado` });
            }
            res.json({ message: "success", menu });
        } catch (e) {
            res.status(400).json({ message: "error", e });
        }
    }
    async store(req, res) {
        try {
            const { title, description, price, restaurant_id, category_id } = req.body;
            const restaurant = await Restaurant.findByPk(restaurant_id)
            if (!restaurant) {
                res.json({ message: `Restaurante não encontrado.` });
            }
            const category = await Category.findByPk(category_id)
            if (!category) {
                res.json({ message: `Categoria não encontrado.` });
            }
            const menu = await Menu.create({ title, description, price, restaurant_id: restaurant.id, category_id: category.id });
            res.json({ message: "success", menu });
        } catch (e) {
            res.status(400).json({ message: "error", e });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { description } = req.body
            const menu = await Menu.findByPk(id)
            if(!category) {
                return res.json({ message: `Categoria não encontrado`});    
            }
            category.description = description || category.description
            res.json({ message: "success", category });
        } catch (e) {
            res.status(400).json({ message: "error", e });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const menu = await Menu.findByPk(id)
            if(!category) {
                return res.json({ message: `Categoria não encontrado`});    
            }
            await Menu.destroy()
            res.status(200).json();
        } catch (e) {
            res.status(400).json({ message: "error", e });
        }
    }
}
module.exports = new MenuController();

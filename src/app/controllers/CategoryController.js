const { destroy } = require("../models/Category");
const Category = require("../models/Category");

class CategoryController {
    async index(req, res) {
        try {
            const categories = await Category.findAll();
            res.status(200).json({ message: "success", categories });
        } catch (e) {
            const { name } = e;
            if (name) {
                const { errors } = e;
                const [firstError] = errors;
                const { message } = firstError;
                return res.status(400).json({ message });
            }
            res.status(400).json({ message: "error", e });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);
            if (!category) {
                res.json({ message: `Categoria não encontrado` });
            }
            res.json({ message: "success", category });
        } catch (e) {
            const { name } = e;
            if (name) {
                const { errors } = e;
                const [firstError] = errors;
                const { message } = firstError;
                return res.status(400).json({ message });
            }
            res.status(400).json({ message: "error", e });
        }
    }
    async store(req, res) {
        try {
            const { description } = req.body;
            const category = await Category.create({ description });
            res.json({ message: "success", category });
        } catch (e) {
            const { name } = e;
            if (name) {
                const { errors } = e;
                const [firstError] = errors;
                const { message } = firstError;
                return res.status(400).json({ message });
            }
            res.status(400).json({ message: "error", e });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { description } = req.body
            const category = await Category.findByPk(id)
            if(!category) {
                return res.json({ message: `Categoria não encontrado`});    
            }
            category.description = description || category.description
            res.json({ message: "success", category });
        } catch (e) {
            const { name } = e;
            if (name) {
                const { errors } = e;
                const [firstError] = errors;
                const { message } = firstError;
                return res.status(400).json({ message });
            }
            res.status(400).json({ message: "error", e });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id)
            if(!category) {
                return res.json({ message: `Categoria não encontrado`});    
            }
            await category.destroy()
            res.status(200).json();
        } catch (e) {
            const { name } = e;
            if (name) {
                const { errors } = e;
                const [firstError] = errors;
                const { message } = firstError;
                return res.status(400).json({ message });
            }
            res.status(400).json({ message: "error", e });
        }
    }
}
module.exports = new CategoryController();

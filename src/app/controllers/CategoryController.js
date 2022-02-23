import Category from "../model/Category";
import schemaCategory from "../../validators/categoryValidator/schema";
import queryBuilder from "../../services/queryBuilder";
export default class CategoryController {
    async index(_, res) {
        // #swagger.tags = ['Categoria']
        try {
        const category = await Category.findAll({
            attributes: ['id', 'name'],
            include: {
                association: "posts",
                // include: { association: "author", include: { association: "cargos"} },
            },
        });
        res.json({ message: "success", category });
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Categoria']
        try {
            const { id } = req.params;
            // const category = await Category.findByPk(id)
            const results = await queryBuilder(
                `SELECT * FROM categories WHERE id = ${id}`
            );
            res.json({ message: "success", results });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Categoria']
        try {
            if (!(await schemaCategory.isValid(req.body)))
                throw new Error("Nome da categoria é obrigatorio.");
            const category = await Category.create(req.body);
            res.json({ message: "success", category });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Categoria']
        try {
            const { id } = req.params;
            if (!(await schemaCategory.isValid(req.body)))
                throw new Error("Nome da categoria é obrigatorio.");
            const category = await Category.findByPk(id);
            category.name = req.body.name;
            await category.save();
            res.json({ message: "success", category });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async destroy(req, res) {
        // #swagger.tags = ['Categoria']
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);
            await category.destroy();
            res.json({ message: "success", id });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
}

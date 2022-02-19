import Permission from "../model/Permission";

export default class PermissionController {
    async index(_, res) {
        // #swagger.tags = ['Permissões']
        try {
            const category = await Permission.findAll();
            res.json({ message: "success", category });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Permissões']
        try {
            const { id } = req.params;
            const permission = await Permission.findByPk(id)            
            res.json({ message: "success", permission });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Permissões']
        try {
            const permission = await Permission.create(req.body);
            res.json({ message: "success", permission });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Permissões']
        try {
            const { id } = req.params;
            const permission = await Permission.findByPk(id);
            permission.description = req.body.description;
            await permission.save();
            res.json({ message: "success", permission });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async destroy(req, res) {
        // #swagger.tags = ['Permissões']
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

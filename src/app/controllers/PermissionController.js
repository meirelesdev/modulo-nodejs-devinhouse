import Permission from "../model/Permission";

export default class PermissionController {
    async index(_, res) {
        // #swagger.tags = ['Permissões']
        try {
            const category = await Permission.findAll({attributes: ['id', 'description']});
            res.json({ message: "success", category });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Permissões']
        try {
            const { id } = req.params;
            const permission = await Permission.findByPk(id, {attributes: ['id', 'description']})
            res.json({ message: "success", permission });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Permissões']
        try {
            const {description } = req.body
            if(!description) throw new Error("Dados inválidos.")
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
            const permission = await Permission.findByPk(id);
            await permission.destroy();
            res.status(201).json();
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
}

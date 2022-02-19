import Role from "../model/Role";

export default class RoleController {
    async index(_, res) {
        // #swagger.tags = ['Cargo']
        try {
            const role = await Role.findAll();
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { id } = req.params;
            const role = await Role.findByPk(id)            
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const role = await Role.create(req.body);
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { id } = req.params;
            const role = await Role.findByPk(id);
            role.description = req.body.description;
            await Role.save();
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async destroy(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { id } = req.params;
            const role = await Category.findByPk(id);
            await role.destroy();
            res.json({ message: "success", id });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
}

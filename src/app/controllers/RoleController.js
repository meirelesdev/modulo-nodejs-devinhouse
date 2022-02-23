import Permission from "../model/Permission";
import Role from "../model/Role";

export default class RoleController {
    async index(_, res) {
        // #swagger.tags = ['Cargo']
        try {
            const role = await Role.findAll({
                attributes: ['id', 'description'],
                include: [
                    {
                        association: 'permissions',
                        required: false,
                        attributes: ['id', 'description'],
                        through: {
                            attributes: []
                        }
                    },
                    {
                        association: 'users',
                        required: false,
                        attributes: ['id', 'name', 'email'],
                        through: {
                            attributes: []
                        }
                    }
                ],
            });
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { id } = req.params;
            const role = await Role.findByPk(id, {
                attributes: ['id', 'description'],
                include: {
                    association: 'permissions',
                    attributes: ['id', 'description'],
                    through: {
                        attributes: []
                    }
                }
            })
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { description, permissions } = req.body
            
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { id } = req.params
            if(!id) throw new Error("Identificador invalido.");

            const { description, permissions } = req.body
            const role = await Role.findByPk(id)
            if(!role) throw new Error("Cargo não encontrado")

            if(permissions && permissions.length > 0) {
                const permissionsEntity = await Permission.findAll({
                    where: {
                        id: permissions
                    }
                })
                permissionsEntity.forEach(async(permission) => {
                    await role.addPermission(permission)
                });
            }
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

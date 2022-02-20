import Role from "../model/Role";
import PermissionRole from '../model/PermissionRole'

export default class RoleController {
    async index(_, res) {
        // #swagger.tags = ['Cargo']
        try {
            const role = await Role.findAll({
                include: [
                    {
                        association: 'permissions',
                        required: false
                    },
                    {
                        association: 'users',
                        required: false
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
            const role = await Role.findByPk(id)            
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { description, permissions } = req.body
            const role = await Role.create({description});
            if(permissions && permissions.length > 0) {
                const permissionsRole = permissions.map( async permission => {
                    return await PermissionRole.create({
                        'role_id': role.id,
                        'permission_id': permission
                    })
                })
            }
            res.json({ message: "success", role });
        } catch (e) {
            res.json({ message: e.message });
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Cargo']
        try {
            const { id } = req.params;
            const { description, permissions } = req.body
            if(permissions && permissions.length > 0) {
                const permissionsRole = permissions.map( async permission => {
                    return await PermissionRole.create({
                        'role_id': id,
                        'permission_id': permission
                    })
                })
            }
            const role = await Role.findByPk(id);
            role.description = description || role.description;
            await role.save();
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

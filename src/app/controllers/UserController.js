import User from "../model/User";
import Role from "../model/Role";
import { Op } from "sequelize";
import { sign } from "jsonwebtoken";

export default class UserController {
    async index(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { title } = req.query || "";
            const users = await User.findAll({
                attributes: ["id", "name", "email", "nickname"],
                include: [
                    {
                        association: "cargos",
                    },
                    {
                        association: "posts",
                    },
                ],
            });
            res.json({ message: "success", users });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { id } = req.params;
            const user = await User.findByPk(id, {
                attributes: ["id", "name", "email", "nickname"],
                include: [
                    {
                        association: "cargos",
                    },
                    {
                        association: "posts",
                    },
                ],
            });
            res.json({ message: "success", user });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { name, nickname, email, password, cargos } = req.body;
            const user = await User.create({
                name,
                nickname,
                email,
                password_hash: password
            });
            if (cargos && cargos.length > 0) {
                const arrayCargos = await Role.findAll({
                    where: {
                        id: cargos,
                    },
                });
                await user.setCargos(arrayCargos)
            }
                
            res.json({
                message: "success",
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            });
        } catch (e) {
            res.status(400).json({ message: e });
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { id } = req.params;
            const { name, nickname, email, password } = req.body;
            const user = await User.findByPk(id);
            console.log(user);
            user.name = name || user.name;
            user.nickname = nickname || user.nickname;
            user.email = email || user.email;
            user.password_hash = password || user.password_hash;
            await user.save();
            res.json({ message: "success", user });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
    async destroy(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            await user.destroy();
            res.json({ message: "success", id });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
    async session(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                attributes: ["name", "email", "nickname"],
                where: {
                    email: {
                        [Op.eq]: email,
                    },
                },
            });
            const token = sign({ user }, process.env.SECRET);

            res.json({ message: "success", token });
        } catch (e) {
            res.status(400).json({ message: e.message || e.errors[0].message });
        }
    }
    async refreshToken(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            res.json({ message: "success", message: "tela de refresh" });
        } catch (e) {
            res.status(400).json({ message: e.message || e.errors[0].message });
        }
    }
    async login(req, res) {
        // #swagger.tags = ['Usuário']
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                attributes: ["name", "email", "nickname"],
                where: {
                    email: {
                        [Op.eq]: email,
                    },
                },
            });
            // Com tempo de expiração
            // const token = sign({user}, process.env.SECRET, {
            //     expiresIn: '5m'
            // })
            const token = sign({ user }, process.env.SECRET);
            res.json({ message: "success", token });
        } catch (e) {
            res.status(400).json({ message: e.message || e.errors[0].message });
        }
    }
}

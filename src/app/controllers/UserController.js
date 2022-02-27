const User = require("../models/User");

class UserController {
    async index(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json({ message: "success", users});
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if(!user) {
                res.json({ message: `Usuário não encontrado`});    
            }
            res.json({ message: "success", user });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async store(req, res) {
        try {
            const { name, nickname, email, password_hash } = req.body;
            
            const user = await User.create({ name, nickname, email, password_hash });
            res.json({ message: "success", user });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)
            if(!user) {
                res.json({ message: `Usuário não encontrado`});    
            }
            user.name = req.body.name || user.name
            user.nickname = req.body.nickname || user.nickname
            user.email = req.body.email || user.email
            user.password_hash = req.body.password_hash || user.password_hash
            await user.save()
            res.json({ message: "success", user });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)
            if(!user) {
                res.json({ message: `Usuário não encontrado`});    
            }
            await user.destroy()
            res.status(200).json();
        } catch (e) {
            res.status(400).json({error: e});
        }
    }
}
module.exports = new UserController();

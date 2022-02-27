const Address = require("../models/Address");

class AddressController {
    async index(req, res) {
        try {
            const addresses = await Address.findAll();
            res.status(200).json({ message: "success", addresses});
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const address = await Address.findByPk(id);
            if(!address) {
                res.json({ message: `Endereço não encontrado`});    
            }
            res.json({ message: "success", address });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async store(req, res) {
        try {
            const {
                cep,
                street,
                district,
                city,
                state,
                uf,
                number,
                complement,
            } = req.body;
            const address = await Address.create({
                cep,
                street,
                district,
                city,
                state,
                uf,
                number,
                complement,
            });
            res.json({ message: "success", address });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const address = await Address.findByPk(id)
            if(!address) {
                res.json({ message: `Endereço não encontrado`});    
            }
            address.cep = req.body.cep || address.cep
            address.street = req.body.street || address.street
            address.district = req.body.district || address.district
            address.city = req.body.city || address.city
            address.state = req.body.state || address.state
            address.uf = req.body.uf || address.uf
            address.number = req.body.number || address.number
            address.complement = req.body.complement || address.complement
            await address.save()
            res.json({ message: "success", address });
        } catch (error) {
            res.status(400).json({ message: "success", error });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params
            const address = await Address.findByPk(id)
            if(!address) {
                res.json({ message: `Endereço não encontrado`});    
            }
            await address.destroy()
            res.status(200).json();
        } catch (e) {
            res.status(400).json({error: e});
        }
    }
}
module.exports = new AddressController();

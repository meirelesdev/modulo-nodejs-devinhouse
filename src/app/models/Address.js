const { DataTypes, Model } = require("sequelize");

class Address extends Model {
    static init(sequelize) {
        super.init(
            {
                cep: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "O cep deve ser informado com 8 ou 9 digitos.",
                            args: [8, 9],
                        },
                    },
                },
                street: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "O nome da rua deve ter entre 3 e 15 caracteres.",
                            args: [3, 15],
                        },
                    },
                },
                district: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "O bairro deve ter entre 3 e 15 caracteres.",
                            args: [3, 15],
                        },
                    },
                },
                city: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "A cidade deve ter entre 3 e 30 caracteres.",
                            args: [3, 30],
                        },
                    },
                },
                state: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "O estado deve ter entre 3 e 30 caracteres.",
                            args: [3, 30],
                        },
                    },
                },
                uf: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "A sigla uf deve ter somente 2 caracteres.",
                            args: [2],
                        },
                    },
                },
                number: DataTypes.STRING,
                complement: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: 'addresses'
            }
        );
    }
}
module.exports = Address;

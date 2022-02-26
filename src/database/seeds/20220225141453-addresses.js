"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "addresses",
            [
                {
                    cep: "88000-001",
                    street: "Rua Santos dumont",
                    district: "Bela vista",
                    city: "Cuiabá",
                    state: "Mato grosso",
                    uf: "MT",
                    number: "1045",
                    complement: "Terreo 5",
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                  cep: "88000-002",
                  street: 'São jose',
                  number: '1453',
                  district: 'Vila nova',
                  city: 'Arapiraca',
                  state:  'Alagoas',
                  uf: "AL",
                  complement:  'Conjunto 10',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-003",
                  street: 'Santo Antonio',
                  number: '376',
                  district:   'Planalto', 
                  city: 'Juiz de fora', 
                  state: 'Minas gerais',
                  uf: "MG",
                  complement: 'Sobreloja 10',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-004",
                  street: 'Ceará',
                  number: '7877', 
                  district: 'Santo Antonio', 
                  city: 'Bacabal',
                  state: 'Maranhão', 
                  uf: "MA",
                  complement: 'Loja 8',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-005",
                  street: 'Espírito Santo',
                  number: '1220',
                  district:  'São Cristóvão', 
                  city: 'Sete Lagoas',
                  state:  'Minas Gerais',
                  uf: "MG",
                  complement:  'Galeria 6',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-006",
                  street: 'Maranhão',
                  number: '5679',
                  district:  'Boa Vista',
                  city:  'Senador Canedo',
                  state: 'Goiás', 
                  uf: "GO",
                  complement: 'Loja 4',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-007",
                  street: 'Alagoas',
                  number: '475',
                  district:  'Santo Antônio',
                  city: 'Cariacica',
                  state:  'Espírito Santo',
                  uf: "ES",
                  complement: 'Andar 10',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-008",
                  street: 'Santos Dumont',
                  number: '3278', 
                  district: 'Santo Antônio',
                  city:  'Luziânia',
                  state: 'Goiás',
                  uf: "GO",
                  complement: 'Cobertura 8',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-009",
                  street: 'Tiradentes',
                  number: '369',
                  district: 'São Francisco',
                  city: 'Altamira',
                  state: 'Pará',
                  uf: "PA",
                  complement:  'Terreo 1',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-010",
                  street: 'Santa Maria',
                  number: '2920',
                  district:  'Industrial',
                  city: 'Santarém',
                  state: 'Pará',
                  uf: "PA",
                  complement: 'Quadra 2',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-011",
                  street: 'Belo Horizonte',
                  number: '2365',
                  district:  'Centro',
                  city: 'Timon',
                  state: 'Maranhão',
                  uf: "BH",
                  complement: 'Sala 4',
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  cep: "88000-012",
                  street: 'Alagoas',
                  number: '9149',
                  district: 'Bela Vista',
                  city: 'Campina Grande',
                  state: 'Paraíba',
                  uf: "PB",
                  complement: 'Conjunto 4',
                  created_at: new Date(),
                  updated_at: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("addresses", null, {});
    },
};

const prisma = require("../data/prisma");

 const novoCarro = async (req, res) => {
    const carro = req.body;

     let cPlaca = carro.placa.trim().toUpperCase().includes()

    if (!carro.placa) {
        return res.status(400).json({
            erro: "A placa não pode ser vazia."
        });
    }

    if (cPlaca.length !== 7) {
        return res.status(400).json({
            erro: "A placa deve ter exatamente 7 caracteres (modelo antigo)."
        });
    }

    if (cPlaca.includes(" ")) {
        return res.status(400).json({
            erro: "A placa não pode conter espaços."
        });
    }

     const ncarro = await prisma.carros.create({
        data: carro
    });

    return res.status(201).json(ncarro);
};


const listarCarros = async (req, res) => {
const carros = await prisma.carros.findMany();

};

const buscarCarros = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id }, 
        include: {
            carros: true 
        }
    });

    res.json(carro).status(200).end();
};

const apagarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id }
    });

    res.json(carro).status(200).end();
};

const atualizarCarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const carro = await prisma.carros.update({
        where: { id },
        data: dados
    });

    res.json(carro).status(200).end();
};

module.exports = {
    novoCarro,
    listarCarros,
    buscarCarros,
    apagarCarro,
    atualizarCarro
}
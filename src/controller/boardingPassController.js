const BoardingPass = require("../models/BoardingPass");

async function getBoardingPasses(req, res) {
    try {
        const boardingPasses = await BoardingPass.findAll();
        res.json(boardingPasses);
    } catch (error) {
        console.error("Erro ao buscar cartões de embarque:", error);
        res.status(500).json({ error: "Erro ao buscar cartões de embarque" });
    }
}

async function getBoardingPassById(req, res) {
    try {
        const boardingPass = await BoardingPass.findByPk(req.params.id);
        if (!boardingPass) return res.status(404).json({ error: "Cartão de embarque não encontrado" });
        res.json(boardingPass);
    } catch (error) {
        console.error("Erro ao buscar cartão de embarque:", error);
        res.status(500).json({ error: "Erro ao buscar cartão de embarque" });
    }
}

async function createBoardingPass(req, res) {
    try {
        const newBoardingPass = await BoardingPass.create(req.body);
        res.status(201).json(newBoardingPass);
    } catch (error) {
        console.error("Erro ao criar cartão de embarque:", error);
        res.status(400).json({ error: "Erro ao criar cartão de embarque" });
    }
}

async function updateBoardingPass(req, res) {
    try {
        const updated = await BoardingPass.update(req.body, { where: { boarding_pass_id: req.params.id } });
        if (updated[0] === 0) return res.status(404).json({ error: "Cartão de embarque não encontrado" });
        res.json({ message: "Cartão de embarque atualizado com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar cartão de embarque:", error);
        res.status(400).json({ error: "Erro ao atualizar cartão de embarque" });
    }
}

async function deleteBoardingPass(req, res) {
    try {
        const deleted = await BoardingPass.destroy({ where: { boarding_pass_id: req.params.id } });
        if (deleted === 0) return res.status(404).json({ error: "Cartão de embarque não encontrado" });
        res.json({ message: "Cartão de embarque excluído com sucesso" });
    } catch (error) {
        console.error("Erro ao excluir cartão de embarque:", error);
        res.status(500).json({ error: "Erro ao excluir cartão de embarque" });
    }
}

module.exports = { getBoardingPasses, getBoardingPassById, createBoardingPass, updateBoardingPass, deleteBoardingPass };
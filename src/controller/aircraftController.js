const Aircraft = require("../models/Aircraft");

async function getAircrafts(req, res) {
    try {
        const aircrafts = await Aircraft.findAll();
        res.json(aircrafts);
    } catch (error) {
        console.error("Erro ao buscar aeronaves:", error);
        res.status(500).json({ error: "Erro ao buscar aeronaves" });
    }
}

async function getAircraftById(req, res) {
    try {
        const aircraft = await Aircraft.findByPk(req.params.id);
        if (!aircraft) return res.status(404).json({ error: "Aeronave não encontrada" });
        res.json(aircraft);
    } catch (error) {
        console.error("Erro ao buscar aeronave:", error);
        res.status(500).json({ error: "Erro ao buscar aeronave" });
    }
}

async function createAircraft(req, res) {
    try {
        const newAircraft = await Aircraft.create(req.body);
        res.status(201).json(newAircraft);
    } catch (error) {
        console.error("Erro ao criar aeronave:", error);
        res.status(400).json({ error: "Erro ao criar aeronave" });
    }
}

async function updateAircraft(req, res) {
    try {
        const updated = await Aircraft.update(req.body, { where: { aircraft_id: req.params.id } });
        if (updated[0] === 0) return res.status(404).json({ error: "Aeronave não encontrada" });
        res.json({ message: "Aeronave atualizada com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar aeronave:", error);
        res.status(400).json({ error: "Erro ao atualizar aeronave" });
    }
}

async function deleteAircraft(req, res) {
    try {
        const deleted = await Aircraft.destroy({ where: { aircraft_id: req.params.id } });
        if (deleted === 0) return res.status(404).json({ error: "Aeronave não encontrada" });
        res.json({ message: "Aeronave excluída com sucesso" });
    } catch (error) {
        console.error("Erro ao excluir aeronave:", error);
        res.status(500).json({ error: "Erro ao excluir aeronave" });
    }
}

module.exports = { getAircrafts, getAircraftById, createAircraft, updateAircraft, deleteAircraft };
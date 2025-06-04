const Flight = require("../models/Flight");

async function getFlights(req, res) {
    try {
        const flights = await Flight.findAll();
        res.json(flights);
    } catch (error) {
        console.error("Erro ao buscar voos:", error);
        res.status(500).json({ error: "Erro ao buscar voos" });
    }
}

async function getFlightById(req, res) {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) return res.status(404).json({ error: "Voo não encontrado" });
        res.json(flight);
    } catch (error) {
        console.error("Erro ao buscar voo:", error);
        res.status(500).json({ error: "Erro ao buscar voo" });
    }
}

async function createFlight(req, res) {
    try {
        const newFlight = await Flight.create(req.body);
        res.status(201).json(newFlight);
    } catch (error) {
        console.error("Erro ao criar voo:", error);
        res.status(400).json({ error: "Erro ao criar voo" });
    }
}

async function updateFlight(req, res) {
    try {
        const updated = await Flight.update(req.body, { where: { flight_id: req.params.id } });
        if (updated[0] === 0) return res.status(404).json({ error: "Voo não encontrado" });
        res.json({ message: "Voo atualizado com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar voo:", error);
        res.status(400).json({ error: "Erro ao atualizar voo" });
    }
}

async function deleteFlight(req, res) {
    try {
        const deleted = await Flight.destroy({ where: { flight_id: req.params.id } });
        if (deleted === 0) return res.status(404).json({ error: "Voo não encontrado" });
        res.json({ message: "Voo excluído com sucesso" });
    } catch (error) {
        console.error("Erro ao excluir voo:", error);
        res.status(500).json({ error: "Erro ao excluir voo" });
    }
}

module.exports = { getFlights, getFlightById, createFlight, updateFlight, deleteFlight };
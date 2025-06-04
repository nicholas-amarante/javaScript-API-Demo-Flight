const Passenger=require("../models/Passenger");

async function getPassengers(req, res) {
    try {
        const passengers = await Passenger.findAll();
        res.json(passengers);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar passageiros" });
    }
}

async function getPassengerById(req, res) {
    try {
        const passenger = await Passenger.findByPk(req.params.id);
        if (!passenger) return res.status(404).json({ error: "Passageiro não encontrado" });
        res.json(passenger);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar passageiro" });
    }
}

async function createPassenger(req, res) {
    try {
        const newPassenger = await Passenger.create(req.body);
        res.status(201).json(newPassenger);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar passageiro" });
    }
}

async function updatePassenger(req, res) {
    try {
        const updated = await Passenger.update(req.body, { where: { passenger_id: req.params.id } });
        if (updated[0] === 0) return res.status(404).json({ error: "Passageiro não encontrado" });
        res.json({ message: "Passageiro atualizado com sucesso" });
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar passageiro" });
    }
}

async function deletePassenger(req, res) {
    try {
        const deleted = await Passenger.destroy({ where: { passenger_id: req.params.id } });
        if (deleted === 0) return res.status(404).json({ error: "Passageiro não encontrado" });
        res.json({ message: "Passageiro excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir passageiro" });
    }
}

module.exports = { getPassengers, getPassengerById, createPassenger, updatePassenger, deletePassenger };
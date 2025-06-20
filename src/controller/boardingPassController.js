const sequelize= require("../config/db");
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

async function selectCartaoEmbarque(req, res) {
    try{
        const [resultados]=await sequelize.query(`
        SELECT
            bp.boarding_pass_id AS boarding_pass_id,
            bp.seat_number AS seat_number,
            bp.issue_time AS issue_time,
            p.first_name AS passenger_first_name,
            p.last_name AS passenger_last_name,
            p.birth_date AS passenger_birth_date,
            p.passport_number AS passenger_passport_number,
            f.flight_number AS flight_number,
            f.departure_airport AS departure_airport,
            f.arrival_airport AS arrival_airport,
            f.departure_time AS departure_time,
            f.arrival_time AS arrival_time,
            a.model AS aircraft_model,
            a.manufacturer AS aircraft_manufacturer,
            a.capacity AS aircraft_capacity
        FROM
            boarding_pass bp
        JOIN
            passenger p ON bp.passenger_id = p.passenger_id
        JOIN
            flight f ON bp.flight_id = f.flight_id
        JOIN
            aircraft a ON f.aircraft_id = a.aircraft_id
        ORDER BY
            bp.boarding_pass_id;`);
    res.json(resultados);
    }catch(error){
        console.error("Erro ao usar a consulta personalizada.", error);
        res.status(500).json({error:"Erro ao executar a consulta."})
    }
}

module.exports = { getBoardingPasses, getBoardingPassById, createBoardingPass, updateBoardingPass, deleteBoardingPass, selectCartaoEmbarque };
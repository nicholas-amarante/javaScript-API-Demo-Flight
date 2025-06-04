const User=require("../models/User");

async function getUsers(req, res){
    try{
        const users=await User.findAll();
        res.json(users);
    }catch(error){
        res.status(500).json({error:"Erro ao buscar usuários"});
    }
}

async function getUserById(req, res){
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuário" });
    }
}

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar usuário" });
    }
}

async function updateUser(req, res) {
    try {
        const updated = await User.update(req.body, { where: { id: req.params.id } });
        if (updated[0] === 0) return res.status(404).json({ error: "Usuário não encontrado" });
        res.json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário" });
    }
}

async function deleteUser(req, res) {
    try {
        const deleted = await User.destroy({ where: { id: req.params.id } });
        if (deleted === 0) return res.status(404).json({ error: "Usuário não encontrado" });
        res.json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir usuário" });
    }
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
const User=require("../models/User");
const jwt=require('jsonwebtoken');

async function login(req, res){
    try{
        const {user, password}=req.body;
        const foundUser=await User.findOne({where: {login_email: user}});
        if(!foundUser){
            return res.status(404).json({error: "Usuário não encontrado"});
        }
        if(foundUser.password != password){
            return res.status(401).json({error: "senha incorreta"});
        }
        const token=jwt.sign({userId: foundUser.id, role: foundUser.role}, process.env.JWT_SECRET, {expiresIn: "1h"});
        console.log("Autenticado");
        return res.json({token});

    }catch(error){
        console.error("Error ao Autenticar usuário", error);
        res.status(500).json({error:"Erro ao autenticar usuário"})
    }
}
module.exports={login};
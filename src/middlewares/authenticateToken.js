const jwt=require("jsonwebtoken");

function authenticateToken(req, res, next){
    const token=req.headers['x-access-token'];

    if(!token){
        return res.status(401).json({error:"Acesso negado. Token não forncedico"});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode)=>{
        if(err){
            return res.status(403).json({error: "Token inválido ou expirado"});
        }
        req.userId=decode.userId;
        next();
    });
}
module.exports=authenticateToken;
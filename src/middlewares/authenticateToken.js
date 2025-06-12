const jwt=require("jsonwebtoken");

function authenticateToken(req, res, next){
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({error:"Acesso negado. Token não fornecido"});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(403).json({error: "Token inválido ou expirado"});
        }
        req.userId=decoded.userId;
        req.userType=decoded.user_type;
        next();
    });
}
module.exports=authenticateToken;
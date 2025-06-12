function authorizeUserType(requiredType){
    return (req, res, next)=>{
        if(req.userType!=requiredType){
            return res.status(403).json({error: "Acesso negado. Permissão insuficiente"});
        }
        next();
    };
}
module.exports=authorizeUserType;
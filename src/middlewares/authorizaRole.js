function authorizeRole(requireRole){
    return (req, res, next)=>{
        if(req.userRole!=requireRole){
            return res.status(403).json({error: "Acesso negado. Permissão insuficiente"});
        }
        next();
    };
}
module.exports=authorizeRole;
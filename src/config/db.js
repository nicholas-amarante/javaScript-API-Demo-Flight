async function connect(){
    const {Sequelize}=require("sequelize");
    const sequelize=new Sequelize(process.env.CONECTION_STRING, {
        dialect:"postgres",
        logging:false
    });
    module.exports = sequelize;
    
    if(global.connection)
        return global.connection.connect();

    const {Pool}=require("pg");
    const pool=new Pool({
        connectionString: process.env.CONECTION_STRING
    })

    const client=await pool.connect();
    console.log("Criou o pool de conexão");
    const res=await client.query("select now()");
    console.log(res.rows[0]);
    client.release();
    global.connection=pool;
    return pool.connect();
}

connect();

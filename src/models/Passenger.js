const {Sequelize, DataTypes}=require("sequelize");
const sequelize=require("../config/db");

const Passenger=sequelize.define("Passenger", {
    passenger_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    first_name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    birth_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    passport_number:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true
    }
},{
    tableName:"passenger",
    timestamps:false
});

module.exports=Passenger;
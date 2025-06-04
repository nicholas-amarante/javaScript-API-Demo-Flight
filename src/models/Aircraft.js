const {Sequelize, DataTypes}=require("sequelize");
const sequelize=require("../config/db");

const Aircraft=sequelize.define("Aircraft", {
    aircraft_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    model:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    manufacturer:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    capacity:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    tableName:"aircraft",
    timestamps:false
});

module.exports=Aircraft;
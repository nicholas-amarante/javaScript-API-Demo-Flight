const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Aircraft = require("./Aircraft");

const Flight = sequelize.define("Flight", {
    flight_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flight_number: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    departure_airport: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    arrival_airport: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    departure_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    arrival_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    aircraft_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Aircraft,
            key: "aircraft_id"
        },
        allowNull: false
    }
}, {
    tableName: "flight",
    timestamps: false
});

Flight.belongsTo(Aircraft, { foreignKey: "aircraft_id" });

module.exports = Flight;
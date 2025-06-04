const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Passenger = require("./Passenger");
const Flight = require("./Flight");

const BoardingPass = sequelize.define("BoardingPass", {
    boarding_pass_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seat_number: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    passenger_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Passenger,
            key: "passenger_id"
        },
        allowNull: false
    },
    flight_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Flight,
            key: "flight_id"
        },
        allowNull: false
    },
    issue_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "boarding_pass",
    timestamps: false
});

// Definição de relacionamentos
BoardingPass.belongsTo(Passenger, { foreignKey: "passenger_id" });
BoardingPass.belongsTo(Flight, { foreignKey: "flight_id" });

module.exports = BoardingPass;
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Trip = sequelize.define('trip', {
        fromLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        toLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fromDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        toDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        travelType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tripType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Trip;
}
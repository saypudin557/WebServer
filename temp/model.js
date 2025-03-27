const sequelize = require('./db')
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
    id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true },
    login:{type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})
module.exports = {User}
const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    process.env.DB_NAME || 'kim',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '0000',{
        dialect:'postgres'
    }
)
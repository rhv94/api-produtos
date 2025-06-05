require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,      //essas informações não podem ficar fixas no código. Dessa forma, elas estão públicas
    host: process.env.DB_HOST,       //criar arquivo .env e acresentar a pasta gitignore. Levar todas as informações para a pasta .env, então as informações ficam seguras. Visíveis apenas para você.
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

module.exports = pool
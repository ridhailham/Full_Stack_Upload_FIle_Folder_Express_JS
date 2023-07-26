import {Sequelize}  from "sequelize";

const db = new Sequelize('upload_db', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
})

export default db
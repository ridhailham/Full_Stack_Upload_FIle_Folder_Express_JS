import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize

const Product = db.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
})

export default Product


// (async() => {
//     await db.sync()
// })()
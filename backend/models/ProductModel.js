import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize

const Product = db.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
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
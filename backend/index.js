import express from "express"
import FileUpload from "express-fileupload"
import cors from "cors"
import db from "./config/Database.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(FileUpload())


db.sync({force: true})
    .then(() => {
        // seed.userSeed()
        // seed.categorySeed()
        console.log('database connected');
    })
    .catch((err) => {
        console.error('database connection failed', err);
    })

app.listen(4000, () => {

})

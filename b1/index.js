import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import ProductRoute from "./routes/ProductRoute.js"
import db from "./config/Database.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload())


db.sync({force: true})
    .then(() => {
        // seed.userSeed()
        // seed.categorySeed()
        console.log('database connected');
    })
    .catch((err) => {
        console.error('database connection failed', err);
    })


// ROUTES
app.use(ProductRoute)



app.listen(4000, () => {
    console.log("Server berjalan di port 4000");
});




// import express from "express";
// import FileUpload from "express-fileupload";
// import cors from "cors";
// import db from "./config/Database.js";
// import bodyParser from "body-parser"; // Import body-parser

// import ProductRoute from "./routes/ProductRoute.js"

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(FileUpload());

// db.sync({force:true})
//     .then(() => {
//         // seed.userSeed()
//         // seed.categorySeed()
//         console.log('database connected');
//     })
//     .catch((err) => {
//         console.error('database connection failed')
//     })

// app.use(ProductRoute)

// app.listen(4000, () => {
//     console.log("Server berjalan di port 4000");
// });

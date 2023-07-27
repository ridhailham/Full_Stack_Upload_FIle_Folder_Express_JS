import Product from "../models/ProductModel.js"


export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll()
    res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }

} 

export const getProductsById = async(req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
    res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
} 

export const saveProduct = (req, res) => {
    if (req.files === null) {
        return res.status(400).json({
            massage: "no file uploaded"
        })
    }

    const name = req.body.title
    const file = req.body.files
} 

export const updateProduct = (req, res) => {
    
} 

export const deleteProduct = (req, res) => {
    
} 


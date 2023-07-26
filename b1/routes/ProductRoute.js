import express from "express"
import { 
    getProducts,
    getProductsById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductsById)
router.post('/products', saveProduct)
router.patch('/products', updateProduct)
router.delete('/products', deleteProduct)


export default router
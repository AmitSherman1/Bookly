import express from "express";
import { addCartItem, deleteCartItem, getCartItems } from "../controllers/itemCartController.js";


const itemCartRoutes = express.Router()

itemCartRoutes.get('/', getCartItems)
itemCartRoutes.post('/', addCartItem)
itemCartRoutes.delete('/:id', deleteCartItem)

export default itemCartRoutes
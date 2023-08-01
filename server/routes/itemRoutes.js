import express from "express";
import { addItem, getItems } from "../controllers/itemController.js";


const itemRoutes = express.Router()

itemRoutes.get('/', getItems)
itemRoutes.post('/', addItem)

export default itemRoutes
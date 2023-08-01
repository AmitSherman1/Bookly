import Item from "../models/itemModel.js";

export const getItems = async (req, res) => {
    const items = await Item.find()
    try {
        res.status(200).json(items)
    }catch(error){
        res.status(500).json(error)
    }
} 

export const addItem = async (req, res) => {
    const newItem = new Item(req.body)
    try{
        await newItem.save()
        res.status(200).json(newItem)
    }catch(error){
        res.status(500).json(error)
    }
}
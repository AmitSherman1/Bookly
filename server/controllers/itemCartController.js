import ItemCart from "../models/itemCartModel.js";

export const getCartItems = async (req, res) => {
    const items = await ItemCart.find()
    try {
        res.status(200).json(items)
    }catch(error){
        res.status(500).json(error)
    }
} 

export const addCartItem = async (req, res) => {
    const newItem = new ItemCart(req.body)
    try{
        await newItem.save()
        res.status(200).json(newItem)
    }catch(error){
        res.status(500).json(error)
    }
}

export const deleteCartItem = async (req, res) => {
    try{
        await ItemCart.findByIdAndRemove(req.params.id)
        res.status(200).json("item deleted")
    }catch(error){
        res.status(500).json(error)
    }
}
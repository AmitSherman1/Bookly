import mongoose from "mongoose";

const itemCart = mongoose.Schema({
    _id: String,
    id: String,
    name: String,
    price: Number,
    type: String,
    img: String

})

const ItemCart = mongoose.model("ItemCart", itemCart)

export default ItemCart
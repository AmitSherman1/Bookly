import mongoose from "mongoose";

const item = mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    type: String,
    img: String

})

const Item = mongoose.model("Item", item)

export default Item
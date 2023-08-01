/*Amit Sherman 209284017
Kevin Sbarski 324589480*/
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv' 
import itemRoutes from './routes/itemRoutes.js'
import itemCartRoutes from './routes/itemCartRoutes.js'

const app = express()
dotenv.config()
const corsOptions ={
   origin:'*', 
   credentials:true, 
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))
mongoose.connect(process.env.MONGO_URL, {useNewUrLParser: true, useUnifiedTopology: true})

app.use(express.json())

app.use('/items', itemRoutes)
app.use('/cartitems', itemCartRoutes)


app.get('/', (req, res) => {
    res.send('app is running')
})

app.listen(process.env.port,()=>{
    console.log('listening on port', process.env.PORT)
})
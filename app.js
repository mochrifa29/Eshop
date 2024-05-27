const express = require('express')
const app = express()
const categoriesRouter = require('./routes/categories')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

//Midlware custom
app.use(express.json())
// app.use((req,res,next) => {
//     req.Time = new Date().toISOString()
//     next()
// })

//Midleware morgan (package)
app.use(morgan("dev"))
app.use(cors())

//Routing
//EndPoint Dasar
app.use('/api/categories', categoriesRouter);


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
})
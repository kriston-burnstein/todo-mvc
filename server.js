const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home') //this is bringing in the router export from routes/home; just like an import; it's really just a fancy way of running the code in that file; therefore whatever code is in that file is what const homeRoutes = equals. As a last note, ther response to this call is what the routes/home.js spits out, which is router, which is router.get(/, homeController.index), THAT calls require(../contorllers/home.getIndex)
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)  // on /, use ./routes/home as defined by homeRoutes above
app.use('/todos', todoRoutes)  // on /todos, use ./routes/todos as defined by todoRoutes above
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
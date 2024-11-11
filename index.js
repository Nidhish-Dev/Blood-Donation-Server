require('dotenv').config()
const express = require('express')
const {connectDB} = require('./db/connection')
const cors = require('cors')
const bodyParser = require('body-parser');
const formRouter = require('./routes/formRoutes')

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors({
    origin: 'http://localhost:3000', 
  }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())

//home route
app.get("/", (req,res)=>{
    return res.send("Server is UP and Running...")
});

app.use("/api/form", formRouter)

app.listen(PORT, ()=>console.log("Server Started at PORT: ", PORT));
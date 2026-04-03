import exp from "express"
import { connect } from "mongoose"
import {config} from 'dotenv'
import { empApp } from "./EmployeeAPI.js"
import cors from "cors"

config()
const app = exp()
//body parser

//add cors middleware
app.use(cors({
    origin:['http://localhost:5173']
}))

app.use(exp.json())
const port=process.env.PORT

app.use('/employee-api',empApp)
//connect to db
async function connectDB(){
    try{
        await connect(process.env.DB_URL);
        console.log("DB connection success.")

        //start server
        app.listen(port,()=>console.log(`server on port ${port}...`))
    } catch(err) {
        console.log("Error in DB connection :", err)
    }
}

connectDB();
//to handle invalid path
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path ${req.url} is invalid`})
})

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
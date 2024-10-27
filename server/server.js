import 'dotenv/config'
import express from 'express'
import cors from 'cors'


//App Config

const PORT = process.env.PORT || 4000;
const app = express();

//Intialize Middleware
app.use(express.json())
app.use(cors())


// API routes

app.get('/', (req, res) => res.send("API Working"));


app.listen(PORT, () => console.log("Server is Running at port:" + PORT))
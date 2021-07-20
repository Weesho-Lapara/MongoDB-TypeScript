import express from 'express';
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json())

var mainRoutes = require('./routes/documentRoutes') 

app.use(mainRoutes);

app.listen(5000, ()=>console.log(`Server is running on port 5000`));
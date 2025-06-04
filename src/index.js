require("dotenv").config();
const port=process.env.PORT;
const express=require("express");//carrega a biblioteca
const app=express();//chamando em forma de funcao
const jwt=require('jsonwebtoken');

app.use(express.json());
const userRoutes=require("./routes/userRoutes");
const passengerRoutes=require("./routes/passengerRoutes");
const aircraftRoutes=require("./routes/aircraftRoutes");
const flightRoutes=require("./routes/flightRoutes");
const boardingPassRoutes=require("./routes/boardingPassRoutes");
const authRoutes=require("./routes/authRoutes");
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", passengerRoutes);
app.use("/api", aircraftRoutes);
app.use("/api", flightRoutes);
app.use("/api", boardingPassRoutes);

app.listen(port, ()=>{
    console.log("app is running...")
})//definindo porta e declarando funcao anonima
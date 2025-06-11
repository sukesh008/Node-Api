import express from "express"
import movieRoutes from "./routes/movies.js"

const app=express();
const PORT=6969;

app.get("/",(req,res)=>{
    res.json({msg: "Hello world"})
})



app.use('/movies',movieRoutes)



app.listen(PORT,()=>{
    console.log(`This server is running at port http://localhost:${PORT}`)
})
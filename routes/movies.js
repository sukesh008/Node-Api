
import express, { Router } from "express"

const router =express.Router();

// CRUD - operations

// Create
router.post('/',(req,res)=>{
     res.send("create a movie")
})

// Read
router.get('/',(req,res)=>{
   res.send("get a movie")
})

// update
router.put('/:id',(req,res)=>{
  res.send("update a movie")
})

// delete
router.delete('/:id',(req,res)=>{
    res.send("delete a movie")
    
})

export default router
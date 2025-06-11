import { model, Schema } from "mongoose";


const schema =new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    }
})

export const Movie=new model("Movie",schema)


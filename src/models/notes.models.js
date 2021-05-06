import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: String,
    description: String,
    userId: String 
},{
    timestamps: true
})

export default model('Note', noteSchema)
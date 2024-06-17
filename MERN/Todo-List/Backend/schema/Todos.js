import { Schema, model } from "mongoose";

const todoSchema = new Schema(
    {
        id: String,
        todo: String,
        isCompleted: Boolean
    }
);


const todo = model("Todo", todoSchema);

export default todo;
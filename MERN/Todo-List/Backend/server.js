import express, { json } from 'express';
import mongoose from 'mongoose';
import todo from './schema/Todos.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/Todo");
}

main().catch((error) => { console.log(error) });

app.use(cors());

app.use(bodyParser.json());

//Adding Todo
app.post('/', async (req, res) => {
    let inserted = await todo.insertMany({
        id: req.body.id,
        todo: req.body.todo,
        isCompleted: req.body.isDone,
    });

    if (inserted.length !== 0) {
        res.status(200).json({
            "success": true,
        })
    }
    else {
        res.status(500).json({
            "success": false
        })
    }
});

//Delete todo
app.delete('/', async (req, res) => {
    let deleted = await todo.deleteOne({ id: req.body.id }).catch((error) => {
        res.status(500).json({
            "success": false,
            "response": "Some Error Occurred",
            "error": error
        })
    })

    if (deleted.deletedCount > 0) {
        res.status(200).json({
            "success": true,
            "response": deleted
        })
    }
    else {
        res.status(404).json({
            "success": false,
            "response": "Data with given Id not found."
        })
    }
});

//Update todo
app.put('/', async (req, res) => {
    let updated = await todo.updateOne({ id: req.body.id }, { todo: req.body.todo, isCompleted: req.body.isDone }).catch((error) => {
        res.status(500).json({
            "success": false,
            "response": "Some Error Occurred",
            "error": error
        })
    })

    if (updated.modifiedCount > 0) {
        res.status(200).json({
            "success": true,
            "response": updated
        })
    }
    else {
        res.status(404).json({
            "success": false,
            "response": "Data with given Id not found."
        })
    }
});

//Get All Todo
app.get('/', async (req, res) => {
    let todoData = await todo.find({})
    if (todoData.length !== 0) {
        res.status(200).json(todoData)
    }
    else {
        res.status(204).json({})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
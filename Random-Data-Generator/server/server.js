import express, { response } from 'express';
import mongoose from 'mongoose';
import {Employee} from '../models/data.js';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 3000;

await mongoose.connect("mongodb://localhost:27017/Company");

function generateData() {
    let name = ["Abhishek", "Anjali", "Govardhan", "Nikhil", "Venkat", "Spoorthi", "Dawar", "Aroun"];
    let city = ["Tokiyo", "New York", "Bangalore", "Antwerp"];
    let isManager = [true, false];
    let language = ["Python", "JavaScript", "C#", "C++", "Java", "Golang"];
    let salary = [2400000, 2200000, 2700000, 2500000];
    let yearofExp = [4, 3, 5, 6, 9, 10]

    return {
        Name: name.at(Math.floor(Math.random() * (name.length))),
        City: city.at(Math.floor(Math.random() * (city.length))),
        IsManager: isManager.at(Math.floor(Math.random() * (isManager.length))),
        Language: language.at(Math.floor(Math.random() * (language.length))),
        Salary: salary.at(Math.floor(Math.random() * (salary.length))),
        YearOfExperience: yearofExp.at(Math.floor(Math.random() * (salary.length)))
    }
}

app.get("/generate", (request, response) => {
    const data = generateData();
    const employee = Employee({
        Name: data.Name,
        City: data.City,
        IsManager: data.IsManager,
        Language: data.Language,
        Salary: data.Salary,
        YearOfExperience: data.YearOfExperience
    });
    employee.save();
    response.send();
});

app.get("/deleteAll", async (request, response) => {
    await Employee.deleteMany({});
    response.send();
});

app.get("/fetch", async (request, response) => {
    const data = await Employee.find();
    response.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
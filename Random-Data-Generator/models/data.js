import mongoose from "mongoose";

//Employee Schema
const EmployeeSchema = new mongoose.Schema({
    Name: String,
    Salary: Number,
    Language: String,
    City: String,
    IsManager: Boolean,
    YearOfExperience: Number
});


//Exporting Employee Schema
export const Employee = mongoose.model("Employee", EmployeeSchema);

const generateButton = document.querySelector(".button>button");

async function addData() {
    await fetch("http://127.0.0.1:3000/generate");
}

async function deleteData() {
    await fetch("http://127.0.0.1:3000/deleteAll");
}

async function getData() {
    let data = await fetch("http://127.0.0.1:3000/fetch");
    return await data.json();
}

const nameValue = document.getElementById("name");
const salaryValue = document.getElementById("salary");
const languageValue = document.getElementById("language");
const managerValue = document.getElementById("manager");
const yoeValue = document.getElementById("yoe");
const cityValue = document.getElementById("city");

generateButton.addEventListener("click", async () => {
    await deleteData();
    await addData();
    let data = await getData();
    nameValue.value = data[0].Name;
    salaryValue.value = data[0].Salary;
    languageValue.value = data[0].Language;
    managerValue.value = data[0].IsManager;
    yoeValue.value = data[0].YearOfExperience;
    cityValue.value = data[0].City;
})
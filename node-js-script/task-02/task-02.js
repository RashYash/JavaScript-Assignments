import fs from "fs";


const text = fs.readFileSync("postal.codes.json");
const inputData = JSON.parse(text);

const output = [];

Object.keys(inputData).forEach(provinceName => {

    const citiesObject = inputData[provinceName];
    const citiesArray = [];

    Object.keys(citiesObject).forEach(cityName => {
        citiesArray.push({
            name: cityName,
            code: citiesObject[cityName]
        });
    });

    output.push({
        name: provinceName,
        cities: citiesArray
    });
});


fs.writeFileSync("output02.json", JSON.stringify(output, null, 2));

console.log("output02.json was created successfully");


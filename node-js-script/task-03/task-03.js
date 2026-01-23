import fs from "fs";

const text = fs.readFileSync("postal.codes.json");
const inputData = JSON.parse(text);
//console.log(inputData);

const output = [];

Object.keys(inputData).forEach(provinceName => {

    const cities = inputData[provinceName];

    Object.keys(cities).forEach(cityName => {

        output.push({
            province: provinceName,
            city: cityName,
            code: cities[cityName]
        });

    });
});

fs.writeFileSync("output03.json", JSON.stringify(output, null, 2));

console.log("output03.json was created successfully");

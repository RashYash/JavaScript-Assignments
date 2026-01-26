import fs from "fs";

const mode = process.argv[2];     
const keyword = process.argv[3];  

console.log("Mode:", mode);
console.log("Keyword:", keyword);


const text = fs.readFileSync("postal.codes.json");
const inputData = JSON.parse(text);

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


let result = [];

if (mode === "findByName") {
    result = output.filter(item =>
        item.city.toLowerCase().includes(keyword.toLowerCase())
    );
}
else if (mode === "findByCode") {
    result = output.filter(item =>
        item.code.includes(keyword)
    );
}
else {
    console.log("Invalid mode. Use findByName or findByCode");
}


fs.writeFileSync("output04.json", JSON.stringify(result, null, 2));

console.log("output04.json was created successfully");
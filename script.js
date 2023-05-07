const pounds = document.querySelector(".pounds");
const kilograms = document.querySelector(".kilograms");
const ounces = document.querySelector(".ounces");
const grams = document.querySelector(".grams");
const form = document.querySelector("form");

form.addEventListener("input", convertWeight)

function convertWeight(){
    if(e.target.classlist.contains("pounds")){
        let x = e.target.value;
        kilograms.value = x / 2.2046;
        grams.value = x / 0.0022046;
        ounces.value = x * 16;
    }
}
function convertWeight(){
    if(e.target.classlist.contains("kilograms")){
        let x = e.target.value;
        pounds.value = x * 2.2046;
        grams.value = x * 1000;
        ounces.value = x * 35.274;
    }
}
function convertWeight(){
    if(e.target.classlist.contains("grams")){
        let x = e.target.value;
        pounds.value = x * 0.0022046;
        kilograms.value = x / 1000;
        ounces.value = x * 0.035274;
    }
}
function convertWeight(){
    if(e.target.classlist.contains("ounces")){
        let x = e.target.value;
        pounds = x * 0.0625;
        kilograms = x / 0.035274;
        grams = x * 0.035274;
    }
}
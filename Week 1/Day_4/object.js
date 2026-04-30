let student = {
    name: "Shamit",
    age: 21,
    city: "Ghazabad",
    isGraduated: false,
}

console.log(student.name);          //Shamit
console.log(student["age"])         //21
console.log(Object.keys(student))   //[ 'name', 'age', 'city', 'isGraduated' ]
console.log(Object.values(student)) //[ 'Shamit', 21, 'Ghazabad', false ]
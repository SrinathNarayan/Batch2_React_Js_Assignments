console.log("---------------------------------------------------------");
console.log("Student Details");
console.log("---------------------------------------------------------");
let students = [];
students[0] = { id: "a001", name: "Rai", marks: 45, city: "Chennai" ,pincode:600053};
students[1] = { id: "a002", name: "Mota", marks: 30, city: "Madurai" ,pincode:620053};
students[2] = { id: "a003", name: "Kishore", marks: 28, city: "Karur",pincode:639003 };
students[3] = { id: "a004", name: "Lokesh", marks: 65, city: "Chennai",pincode:600053 };
students[4] = { id: "a005", name: "Piyu", marks: 75, city: "Chennai",pincode:600014 };
students[5] = { id: "a006", name: "Jk", marks: 45, city: "Banglore",pincode:560002 };
console.log(students);

console.log("---------------------------------------------------------");
console.log("Sorting By Student names ");
console.log("---------------------------------------------------------");
students.sort(function (a, b) {
    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    if (nameA < nameB) {
        return -1
    }

    if (nameA > nameB) {
        return 1
    }

    else {
        return 0
    }
});
students.forEach((e) => {

    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});

console.log("---------------------------------------------------------");
console.log("Sorting By Cities ");
console.log("---------------------------------------------------------");
students.sort(function (a, b) {
    var cityA = a.city.toLowerCase(), cityB = b.city.toLowerCase()
    if (cityA < cityB) {
        return -1
    }

    if (cityA > cityB) {
        return 1
    }

    else {
        return 0
    }
});
students.forEach((e) => {

    console.log(`City: ${e.city}  Name: ${e.name}  Stuednt id: ${e.id} Mark: ${e.marks}`);
});

console.log("---------------------------------------------------------");
console.log("Removing Cities Except Chennai and bangolore ");
console.log("-------------------------------------------------------");
var result = students.filter(citysort => {
    return citysort.city == "Chennai" || citysort.city == "Banglore";
});

console.log(result);
console.log("---------------------------------------------------------");
console.log("Adding 20marks ");
console.log("-------------------------------------------------------");
var result = students.filter(addmasrks => {
    let mark = addmasrks.marks + 20;
console.log(`Name ${addmasrks.name}     New Marks ${mark}`);
});
console.log("---------------------------------------------------------");
console.log("Adding 20marks And 15Marks Extra with Pincode is 600053");
console.log("-------------------------------------------------------");
let addmark = students.map(addmarks => {

    let mar ;
    if(addmarks.pincode==600053)
    {
    mar=addmarks.marks + 35;
    }
    else
    {
        mar=addmarks.marks+20

    }
    
    console.log(`NAME: ${addmarks.name} Mark: ${mar} Pincode: ${addmarks.pincode}`);

});
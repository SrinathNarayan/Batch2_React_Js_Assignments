console.log("=====================");
console.log("List Before Updation");
console.log("=====================");
const username = ["Shiva", "Ram", "Mota", "Kishore", "Lokesh"];
console.log(username);
const upadte = username.map((user, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + user;
    }
    else {
        return 'Dr.' + user;
    }
}
);
console.log("=====================");
console.log("List After Updation");
console.log("=====================");
for (let i = 0; i < upadte.length; i++) {
    console.log(upadte[i]);
}
console.log("=====================");
console.log("Alterations");
console.log("=====================");
for (let i = 0; i < upadte.length; i++) {
    if (upadte[i].startsWith("Dr")) {
        console.log(upadte[i] + " San");

    }
    else {
        console.log(upadte[i]);
    }
   
}
console.log("=====================");

function findSum(...numbers)
{
    var sum = 0;
    numbers.forEach(function(number)
    {
        sum += number;     
    });
    return sum;
}
console.log("Sum OF Number Using Spread Function");
console.log("---------------------------------------------------------");
console.log( " The Sum :" + findSum(1, 2, 3,5,6));   
console.log("Acessing Objects Spread Function");
console.log("---------------------------------------------------------");

let Trainee1 = {
    traine1name: "Ram",
    traine1id: 10078,
    traine1dept: "HR",
    traine1salary: 50000
};

let Trainee2 = {
    traine1name: "Ram",
    traine1id: 10078,
    traine1dept: "Programer",
    traine1salary: 30000
};
let Trainees = {
    ...Trainee1,
    ...Trainee2
};
console.log("List After Modification");
console.log("---------------------------------------------------------");


Trainees.traine1dept = "Techie";
Trainees.traine2salary=60000;

console.log(Trainees);
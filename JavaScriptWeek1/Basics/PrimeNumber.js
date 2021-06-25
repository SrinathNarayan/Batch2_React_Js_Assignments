var primenumArray = []
for (x = 1; x < 25; x++) {
    primenumArray.push(x); 
}

primenumArray = primenumArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(primenumArray);
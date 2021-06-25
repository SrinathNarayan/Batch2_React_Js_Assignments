const Current = new Date();
const yesterday = new Date(Current)
yesterday.setDate(yesterday.getDate() - 1)
console.log("================================");
console.log( "Current Date :" + Current);
console.log("=================================");
console.log(" Yesterday Date :" + yesterday);
console.log("=================================");
class Animal{
constructor(name){
    this.name=name;
}
getname(){
    return this.name;
}
setname(){
    return this.name;
}

greet() {
    console.log("Fastest Animal");
    console.log("=====================");
    console.log(`Animal Name: ${this.name}`);
}

} 
let AnimalName= new Animal ("Horse");
AnimalName.greet();
AnimalName.name = 'Bear';
console.log("=====================");
console.log("Biggest Animal");
console.log("=====================");
console.log( "New Animal : " + AnimalName.name);
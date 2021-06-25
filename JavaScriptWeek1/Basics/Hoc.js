const sample = val => val * val;
const sampleHocFunc = (data,fn)=>{
  let d = data*8;
  return fn(d);
}
let Res = sampleHocFunc(4,sample);
console.log("Hoc Function");
console.log("--------------------------");
console.log(Res);


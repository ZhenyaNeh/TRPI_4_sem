//11 ====================================

function myPromise(sleepTime){
    return new Promise(resolve =>{
         setTimeout(() => resolve(Math.floor(Math.random() * 100)), sleepTime)
     })
 }
 
 myPromise(3000)
 
 .then(result => console.log("   // 1. // \n" + result))
 
 //22 =====================================
 
 function RundomNum(delay){
     return myPromise(delay);
 }
 
 let prom = [];
 
 for(let i = 2000; i <= 4000; i += 1000){
     prom.push(RundomNum(i));
 }
 
 Promise.all(prom)
 .then(result => {
     console.log("\n   // 2. // \n")
 
     result.forEach(element => {
         console.log(element);
     });
 })
 .catch(error => console.error(error));
 
 //33 =====================================
 
 let pr = new Promise((res,rej) => {
     rej('ku')
 })
 
 
 pr
     .then(() => console.log(1))
     .catch(() => console.log("// 3. //\n" + 2))
     .catch(() => console.log(3))
     .then(() => console.log( 4))
     .then(() => console.log(5))
 
 //44 =====================================
 
 new Promise((resolve, reject) => {
     resolve(21)
 })
 .then(result => {
     console.log("\n   // 4. // \n" + result)
     return result * 2
 })
 .then(result => {
     console.log(result)
 })
 
 //55 =====================================
 
 async function Prom(){
     try{
         let res1 = await new Promise(resolve => setTimeout(() => resolve(21)), 1000)
         let res2 = await then(result => {return result * 2})
         console.log("\n   // 6. // \n" + res2)
     }
     catch{
         console.error(error)
     }
 }
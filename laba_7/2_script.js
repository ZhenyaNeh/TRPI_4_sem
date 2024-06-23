console.log("\t// 2. //\n")

function myPromise(sleepTime){
    return new Promise(resolve =>{
         setTimeout(() => resolve(Math.floor(Math.random() * 100)), sleepTime)
     })
 }

function RundomNum(delay){
    return myPromise(delay);
}

let prom = [];

for(let i = 2000; i <= 4000; i += 1000){
    prom.push(RundomNum(i));
}

Promise.all(prom)
.then(result => {
    result.forEach(element => {
        console.log(element);
    });
})
.catch(error => console.error(error));
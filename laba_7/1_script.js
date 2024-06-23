function myPromise(sleepTime){
   return new Promise(resolve =>{
        setTimeout(() => resolve(Math.floor(Math.random() * 100)), sleepTime)
    })
}

myPromise(3000)
.then(result => console.log("   // 1. // \n" + result))


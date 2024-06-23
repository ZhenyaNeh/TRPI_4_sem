async function Prom(){
    try{
        let res1 = await new Promise(resolve => setTimeout(() => resolve(21)), 1000)
        console.log("\t// 6. // \n" + res1)
        res1 = await res1 * 2
        console.log(res1)
    }
    catch{
        console.error(error)
    }
}

Prom()
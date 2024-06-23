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
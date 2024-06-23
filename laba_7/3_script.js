console.log("\t// 2. //\n")

let pr = new Promise((res,rej) => {
    rej('ku')
})


pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
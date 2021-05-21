let a = 10;
let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(a**10);        
    }, 3000);
})

p.then((res) => {
    console.log(res);
    return res
}).then((res) => {
    console.log(res**10);
}).catch((err) => {
    console.error(err);
})
    

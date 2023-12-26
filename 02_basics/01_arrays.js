const myarr = [0, 1, 2, 3, 4, 5, 6];
const myarr2 = new Array(1, 2, 3)
// console.log(myarr[0]);


// Arrays Methods
// myarr.push(7);
// myarr.pop();
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr);
// console.log(myarr.includes(6))
// console.log(myarr.indexOf(6))

// const newArr = myarr.join()

// console.log(myarr);
// console.log( typeof newArr);


// slice , splice

// console.log("A", myarr);

const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1, 3)
console.log("C", myarr);
console.log(myn2)


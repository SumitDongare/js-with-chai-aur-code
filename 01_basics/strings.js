let name = "Sumit"
let repoCount = 7

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("Sumit-D-com")
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt("2"));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 6);
console.log(anotherString);

const newStringOne = "    SumitD   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sumit.com/sumit%20dongare";
const newurl = url.replace('%20', '-');
console.log(url);
console.log(newurl);
console.log(url.includes('sumit'));
console.log(gameName.split("-"))

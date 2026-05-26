const obj = new Object();
const obj2 = {};
obj.name = "Harsh";

Object.assign(obj, { age: 22, city: "Delhi" });

console.log(obj.hasOwnProperty("name"));

console.log(JSON.stringify(obj));

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

let arr = new Array();

arr.push(1);
arr.push(2);
arr.push(3);

const r = arr.reduce((acc, val) => {
    return acc + val;
}, 10);

console.log(r);

arr = arr.map((item) => {
    return item * 2;
});

for (let item of arr) {
    console.log(item);
}

// let jsonString = '{"Prodname":"Mouse","price":500}';
// let product=JSON.parse(jsonString);
// console.log(product.Prodname);

let person = {
    name:"Charlie",
    age:35,
    city:"Ghaziabad"
};

let text=" ";
for (let key in person){
    text += key + " " + person[key] + " , ";
}
console.log(text);
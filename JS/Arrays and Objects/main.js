let fruits = ["apple", "banana", "cherry"];
fruits.push("mango"); // Ads to end
fruits.unshift("grape"); // Ads to beginning
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element

for (let fruit of fruits) {
    console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));



let person = {
    name: "John",
    age: 30,
    isStudent: false,
    sample_func:function(){
        console.log(this.name)
    }
};
console.log(person.name); // "John"
console.log(person["name"]); // "John"

let keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
keys.forEach((key) => {
    console.log(`${key}: ${person[key]}`);
});
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 31], ["city", "New York"]]

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    if (typeof value === 'function') {
        console.log(`${key} is a function`);
      } else {
        console.log(`${key} is not a function`);
      }
    
});

let kisuakta = ["Mugdho", 3.89, "Passed"];
console.log(kisuakta);

let marks = [85, 97, 44, 37, 76, 60], sum = 0;

for (let i = 0; i < marks.length; ++i) {
    sum += marks[i];
}

console.log("Average marks = ", sum / marks.length);

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; ++i) {
    console.log(`Old price of item[${i + 1}] was = ${items[i]}`);

    items[i] = items[i] - (items[i] * 0.1);

    console.log(`Current price of item[${i + 1}] is = ${items[i]}`);
}

items = ["Burger", "Crispy chicken", "Pizza", "Noodles"];
items2 = ["French fries", "Milkshake"];
console.log("Items = [", items.toString(), "]");
let add = items.push("Soup", "Wonton");

console.log("New array size = ", add);
console.log("Whole array = [", items.toString(), "]");

let deletedItems = items.pop();

console.log("After poping = [", items.toString(), "]");

console.log("Deleted item is = ", deletedItems);

let newItem = items.concat(items2);

console.log("New items = [", newItem.toString(), "]");

let ushft = newItem.unshift("Water", "Orange juice");

console.log("New items = [", newItem.toString(), "]");

console.log("Unshift value = ", ushft);

deletedItems = newItem.shift();

console.log("Deleted item is = ", deletedItems);

console.log("New items = [", newItem.toString(), "]");

console.log("Slicing the array = ", newItem.slice(1, 4));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let io = 
arr.splice(2, 0, 26);
let arr1 = arr.splice(3, 2, 100, 101);
console.log("Splice Method = (!Write 'arr' & hit enter on the console)", arr1, arr.length);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);
companies.splice(0, 1);

console.log(companies);

companies.splice(1, 1, "Ola");

console.log(companies);

companies.push("Amazon");

console.log(companies);
const arr = [];

const names = ['Ken', 'Ben', 'Charles', 'Yambo'];

names.forEach(name => arr.push({
  name: name
}))

console.log(arr);

const first = arr[0];
console.log(first);

const val = arr.indexOf(first)

arr.splice(val, 1);
console.log(arr)

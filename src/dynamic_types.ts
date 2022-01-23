let age: any = 25;

age = true;
console.log(age);
age = 'axel';
console.log(age);
age = { name: 'xion' };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push('roxas');
mixed.push(true);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'ephemer', age: 17 };
console.log(ninja);

ninja = { name: 17, age: 'ephemer' };
console.log(ninja);
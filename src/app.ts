import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/has_formatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

});

// // ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// interface Resource<T> {
//     uid: number;
//     resourceType: number;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.DIRECTOR,
//     data: { title: 'organization xiii' }
// }

// const docFour: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: { name: 'xion' }
// }

// console.log(docThree, docFour);

// tuples

// let arr = ['axel', 8, true];
// arr[0] = false;
// arr[1] = 'xion';
// arr = [2, false, 'xigbar']

// let tup: [string, number, boolean] = ['roxas', 13, true];
// tup[0] = 'lexaeus';
// tup[1] = 5;

// let student: [string, number];
// student = ['selphie', 420]
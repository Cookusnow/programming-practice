import { HasFormatter } from '../interfaces/has_formatter.js';

// classes
export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

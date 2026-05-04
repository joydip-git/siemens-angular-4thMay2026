import { Employee } from "./employee";

export class Hr extends Employee {
    private _gratuity: number;

    constructor(id: number, name: string, basic: number, da: number, hra: number, gratuity: number) {
        super(id, name, basic, da, hra)
        this._gratuity = gratuity;
    }

    public get gratuity(): number {
        return this._gratuity;
    }
    public set gratuity(value: number) {
        this._gratuity = value;
    }

    calculateSalary(): void {
        super.calculateSalary();
        this.totalPay += this._gratuity
    }
}
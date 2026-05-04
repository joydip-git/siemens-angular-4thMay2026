import { Employee } from "./employee";

export class Developer extends Employee {
    private _incentive: number;

    constructor(id: number, name: string, basic: number, da: number, hra: number, incentive: number) {
        super(id, name, basic, da, hra)
        this._incentive = incentive;
    }

    public get incentive(): number {
        return this._incentive;
    }
    public set incentive(value: number) {
        this._incentive = value;
    }

    calculateSalary(): void {
        super.calculateSalary()
        this.totalPay += this._incentive
    }
}
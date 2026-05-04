export class Employee {
    private _id: number;
    private _name: string;    
    private _basic: number;   
    private _da: number;
    private _hra: number;
    private _totalPay: number;    

    constructor(id: number, name: string, basic: number, da: number, hra: number) {
        this._id = id;
        this._name = name;
        this._basic = basic;
        this._da = da
        this._hra = hra
        this._totalPay = 0
    }

    public get id() {
        return this._id
    }
    public set id(id: number) {
        this._id = id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get basic(): number {
        return this._basic;
    }
    public set basic(value: number) {
        this._basic = value;
    }
    public get da(): number {
        return this._da;
    }
    public set da(value: number) {
        this._da = value;
    }
    public get hra(): number {
        return this._hra;
    }
    public set hra(value: number) {
        this._hra = value;
    }
    public get totalPay(): number {
        return this._totalPay;
    }
    protected set totalPay(value: number) {
        this._totalPay = value;
    }
    
    calculateSalary(): void {
        this._totalPay = this._basic + this._da + this._hra
    }
}
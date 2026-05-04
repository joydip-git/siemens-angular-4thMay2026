import { fnType, myType } from "./types"

export function add(a: number, b: number): number {
    return a + b
}

export function invoke(fnRef: fnType, x: number, y: number) {
    console.log(fnRef(x, y))
}

export function test(arg: myType): myType {
    return "hello " + arg
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'evennumberfilter'
})
export class EvenNumberFilterPipe implements PipeTransform {
    transform(value: number[], ...args: number[]): number[] {
        const criteria = args[0]
        return value
            .filter((num) => num % 2 == 0)
            .filter(num => num > criteria);
    }
}
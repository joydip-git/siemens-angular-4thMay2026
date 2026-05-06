import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../models/product';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Readonly<Product[]>, ...args: string[]): Readonly<Product[]> {
    return args[0] === '' ? value :
      value.filter(p => p.productName.toLocaleLowerCase().includes(args[0].toLocaleLowerCase()));
  }

}

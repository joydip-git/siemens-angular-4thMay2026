import { Component, signal, input, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  filterValue = ''
  filterValueChanged: OutputEmitterRef<string> = output<string>({ alias: 'filterTextChanged' })

  onFilterValueChanged(value: string) {
    this.filterValue = value;
    this.filterValueChanged.emit(this.filterValue)
  }
}

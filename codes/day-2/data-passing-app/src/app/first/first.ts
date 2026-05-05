import { Component, computed, input, Input, InputSignal, OnChanges, OnDestroy, OnInit, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First implements OnChanges, OnInit, OnDestroy {
  // @Input('dataValue') data = 0
  //computedData = 0
  dataValue: InputSignal<number> = input<number>(0, { alias: 'dataValue' })
  computedData = computed(() => this.dataValue() * 2)

  @Input() dataValue1 = 0

  constructor() {
    console.log('First Created...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    // const dataValueChange: SimpleChange = changes["dataValue"];
    // this.computedData = dataValueChange.currentValue * 2

    const dataValue1Change: SimpleChange = changes["dataValue1"]
    console.log(dataValue1Change.previousValue);
  }
  ngOnInit(): void {
    console.log('init');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}

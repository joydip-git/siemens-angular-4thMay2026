import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {
  // name = ''
  // location = ''

  submit(frm: NgForm) {
    console.log(frm.value);
    // console.log(frm.controls['name'].value);
    // console.log(frm.controls['location'].value);
    //console.log(this.name, this.location);
  }
}

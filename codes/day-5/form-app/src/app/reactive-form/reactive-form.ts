import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { valueValidator } from '../password-validator';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  // name = new FormControl('enter name')
  // location = new FormControl('enter location',[Validators.required,])
  // frm = new FormGroup({
  //   name: new FormControl('enter name'),
  //   location: new FormControl('enter location')
  // })
  frmBuilder = inject(FormBuilder)
  frm: FormGroup = this.frmBuilder.group({
    name: ['enter name',[Validators.required,valueValidator]],
    location:['enter location', [Validators.required,Validators.email]]
  })
  submit() {
    // console.log(this.name.value);
    // console.log(this.location.value);
    console.log(this.frm.value);
  }
  get name() {
    return this.frm.get('name')
  }
  get location() {
    return this.frm.get('location')
  }
}

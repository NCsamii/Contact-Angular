import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  creatreForm: FormGroup = new FormGroup<any>({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
  })
  submitForm() {
    const body = this.creatreForm.value;
  }




}

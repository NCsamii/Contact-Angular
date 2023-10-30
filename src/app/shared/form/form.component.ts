import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiServiceService} from "../services/api-service.service";

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
  constructor(private service : ApiServiceService) {
  }
  submitForm() {
    const body = this.creatreForm.value;
    this.service.addUser(body)
  }




}

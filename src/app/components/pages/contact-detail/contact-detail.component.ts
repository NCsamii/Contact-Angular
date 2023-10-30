import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})

export class ContactDetailComponent {

  formData: FormGroup = new FormGroup<any>(
    {
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    })

  updateForm() {
    // import {Observable} from 'rxjs/Observable';

    // export interface IItemStore<T> {
    //     getItems(): Observable<Array<T>>;
    // }

    // class Item {}

    // @Injectable()
    // export class ItemStore implements IItemStore<Item> {
    //     items: Observable<Array<Item>>;
    //     getItems(): Observable<Array<Item>>{
    //       return this.items;
    //     }
    // }

  }
}

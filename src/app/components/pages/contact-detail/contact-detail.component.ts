import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {ApiServiceService} from "../../../shared/services/api-service.service";

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})

export class ContactDetailComponent implements OnInit {

    formData: FormGroup = new FormGroup<any>(
        {
            name: new FormControl(null, Validators.required),
            phone: new FormControl(null, Validators.required)
        })
    userId: any;
    constructor(private route: ActivatedRoute ,private service: ApiServiceService) {
        route.params.subscribe((params: any) => {
            this.userId = +params.id;
        })
    }

    ngOnInit() {
        this.getData()
    }

    getData() {
        this.service.getUserById(this.userId).subscribe({
            next: (res: any) => {
              this.formData.controls['name'].setValue(res.name);
              this.formData.controls['phone'].setValue(res.phone);
            }
        })
    }

    updateForm() {

    }
}

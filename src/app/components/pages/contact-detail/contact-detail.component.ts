import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../shared/services/api-service.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})

export class ContactDetailComponent implements OnInit {

    formData: FormGroup = new FormGroup<any>(
        {
            name: new FormControl(null, Validators.required),
            phone: new FormControl(null, Validators.required),
            priority: new FormControl(null, Validators.required)
        })
    userId: any;

    constructor(private route: ActivatedRoute,
                private service: ApiServiceService,
                private modalService: NgbModal,
                private router: Router,
                private toastr: ToastrService) {
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
                this.formData.controls['priority'].setValue(res.priority);
            }
        })
    }

    openModal(modal: any) {
        this.modalService.open(modal, {size: '300px', centered: true})
    }

    async delete() {
        await this.service.deleteUser(this.userId)
        this.toastr.success('Item deleted successfully');
        setTimeout(() => {
            this.router.navigate(['/page/home']).then();
        }, 1000);

    }

    updateForm() {
        const body = this.formData.value;
        this.service.updateUser(body, this.userId)
    }

    async changePriority() {
        await this.service.updatePriority(this.formData.controls['priority'].value, this.userId);
        this.modalService.dismissAll()
        this.toastr.success('Item deleted successfully');

    }
}

import {Component, Input, OnInit} from '@angular/core';
import {MockService} from '../services/mock.service';
import {ApiServiceService} from '../services/api-service.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Input('rows') rows: any[] = [];

    constructor(private router: Router) {
    }

    ngOnInit(): void {

    }

    filterField: any;

    viewContact(id:any) {
        this.router.navigate([`/page/details/${id}`]).then();

    }
}

import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../../shared/services/api-service.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    rows: any = []

    constructor(private service: ApiServiceService) {
    }

    ngOnInit(): void {
        this.getData()
    }

    getData() {
        this.service.getUsers().subscribe({
            next: (res: any) => {
                this.rows = res
            }
        })
    }
}

import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private service: ApiServiceService, private data: MockService) {

  }
  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
    })
  }
  contactList: any | null = [];
  filterField: any;
  viewContact() {
  }
}

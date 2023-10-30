import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MockService {

  constructor() {

  }

  userData: User[] = [
    {
      id: 9999,
      name: 'name',
      userId: 1,
      phone: ''
    },
  ]

}

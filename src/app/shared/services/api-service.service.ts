import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {



  private user: any  = [];

  constructor() { }


  getUsers(): Observable<User[]> {

    return of([])


  }



  addUser() {

  }

  updateUser() {

  }

  deleteUser() {

  }


  search() {

  }



}

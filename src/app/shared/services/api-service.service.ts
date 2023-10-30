import {Injectable} from '@angular/core';
import {Observable, Subject, of} from 'rxjs';
import {User} from '../interfaces/user';
import {MockService} from "./mock.service";

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {
    constructor(private mock: MockService) {
    }


    getUsers(): Observable<User[]> {
        return of(this.mock.userData)
    }

    getUserById(id: any) {
        return of(this.mock.userData.find((element: any) => element.id == id))
    }


    addUser(body: any) {
        this.mock.userData.push(body)
        console.log(this.mock.userData)

    }

    updateUser() {

    }

    deleteUser() {

    }
}

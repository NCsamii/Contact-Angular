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

    updateUser(body: any, id: any) {
        this.mock.userData.splice(this.mock.userData.findIndex((object) => object.id === id), 1, body);
        console.log(this.mock.userData)

    }

    updatePriority(body: any, id: any) {
        let value: any = this.mock.userData.find((element: any) => element.id == id)
        value['priority'] = body
        console.log(this.mock.userData)

    }

    deleteUser(id: any) {
        this.mock.userData.splice(this.mock.userData.findIndex((object) => object.id === id), 1)
        console.log(this.mock.userData)

    }
}

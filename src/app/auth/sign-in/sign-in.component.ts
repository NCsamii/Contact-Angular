import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    signInF: FormGroup = new FormGroup<any>({
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
    })

    constructor(private router: Router) {
    }

    signIn() {
        localStorage.setItem('token', 'test');
        this.router.navigate(['/page/home']).then();
    }
}

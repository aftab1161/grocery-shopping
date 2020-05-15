import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  googleSignIn() {
    this.auth.googleSignin().then( response =>
      this.router.navigate(['user'])
    );
  }
}

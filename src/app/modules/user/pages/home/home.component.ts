import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(response => {
        this.user = response;
    });
  }

}

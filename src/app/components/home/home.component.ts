import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../service/cognito.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private cognitoService:CognitoService) {  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  private getUserDetails() {
    this.cognitoService.getUser().then((user:any) => {
      if(user) {
        // Logged in.
        console.log(user);
      } else {
        // If not logged in, send then to sign in.
        this.router.navigate(['/sign-in']);
      }
    });
  }

  signOutWithCognito() {
    this.cognitoService.signOut().then(() => {
      this.router.navigate(['/sign-in']);
    });
  }

}
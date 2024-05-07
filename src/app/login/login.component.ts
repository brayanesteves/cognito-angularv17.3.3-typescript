import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  email   :string = '';
  password:string = '';

  constructor(private router:Router) {  }

  ngOnInit(): void {
    
  }

  async loginWithCognito() {
    try {
      var user = await Auth.signIn(this.email.toString(), this.password.toString());
      console.log(`Authentication permormed for user = ${this.email} 'password' = ${this.password}`);
      var tokens = user.signInUserSession;
      if(tokens != null) {
        console.log('User authenticated.');

        this.router.navigate(['home-one']);
      }
    } catch(error) {
      console.log(error);
      alert('User Authentication failed.');
    }
  }

}

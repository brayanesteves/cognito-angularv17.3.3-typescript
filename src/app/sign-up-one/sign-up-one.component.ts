import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-one',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-one.component.html',
  styleUrl: './sign-up-one.component.scss'
})
export class SignUpOneComponent  implements OnInit {

  email:string;
  password:string;
  givenName:string;
  familyName:string;

  constructor(private router:Router) {  }

  ngOnInit(): void {
    
  }

  register() {
    try {
      const user = Auth.signUp({
        username:this.email,
        password:this.password,
        attributes: {
          email:this.email,
          given_name:this.givenName,
          family_name:this.familyName,
        }
      });
      console.log({ user });
      alert('User signup completed, please check verify your email.');
      this.router.navigate(['login']);
    } catch(error) {
      console.log(`Error signing up:`, error);
    }
  } 

}
import       { Injectable }  from '@angular/core';
import Auth, { Amplify }     from 'aws-amplify';
import       { environment } from '../../environments/environments';
import       { User }        from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() { 
    Amplify.configure({
      Auth:environment.cognito
    });
  }

  public signUp(user:User) : Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes:{
        email:user.email,
        given_name: user.givenName,
        family_name: user.familyName
      },
    });
  }

  public confirmSignUp(user:User) : Promise<any> {
    return Auth.confirmSignUp(user.email, user.code):
  }

  // This method will return user info if any is 
  // logged in with valid email and password.
  public getUser() : Promise<any> {
    return Auth.currentUserInfo();
  }

  public signIn(user:User) : Promise<any> {
    return Auth.signIn(user.email, user.password);
  }

  public signOut() : Promise<any> {
    return Auth.signOut();
  }

  // This method will sent a new code to user email.
  public forgotPassword(user:User) : Promise<any> {
    return Auth.forgotPassword(user.email);
  }

  // We submit the new password with email and code sento to that email.
  public forgotPasswordSubmit(user:User, new_password:string) : Promise<any> {
    return Auth.forgotPasswordSubmit(user.email, user.code, new_password);
  }

}

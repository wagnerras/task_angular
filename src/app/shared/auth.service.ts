
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpResponse, HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularTokenService, AngularTokenModule, AngularTokenOptions } from "angular-token";

import { User } from "./user.model";


@Injectable()

export class AuthService {
  public headers = new Headers({ 'Content-type': 'application/json' });
  public url = "http://api.taskmanager.test:3000";

  public constructor(private tokenService: AngularTokenService, private http: HttpClient) { }

  /*  public signUp(user: User):Observable<Response>{
    
    return this.tokenService.registerAccount(user as any).pipe(
     catchError(this.handleErrors));   
  }  */

  public signUp(user): Observable<Response> {
    console.log("usuario sendo recebido =>", user);
    return this.tokenService.registerAccount({
      login: user.email,
      password: user.password,
      passwordConfirmation: user.passwordConfirmation
    }).catch(this.handleErrors)
  }
/* 
  public signUp(user) {
    console.log("email do usuario =>", user.email);
    return this.tokenService.registerAccount({
      login: user.email,
      password: user.password,
      passwordConfirmation: user.passwordConfirmation
    }).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  } */

  public signOut(): Observable<Response> {
    return this.tokenService.signOut();
  }

  public userSignedIn() {
    return this.tokenService.userSignedIn();
  }

  private handleErrors(error: Response) {
    console.log("DETALHES DO ERRO =>", error);
    return observableThrowError(error);
  }

}
import { Injectable } from "@angular/core";
import { Response, Http, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Angular2TokenService } from "angular2-token";

import { User } from "./user.model";


@Injectable()

export class AuthService {
  public headers = new Headers({ 'Content-type': 'application/json' });
  public url = "http://api.taskmanager.test:3000";

  public constructor(private tokenService: Angular2TokenService, private http: Http) { }

  /* public signUp(user: User):Observable<Response>{
    
    return this.tokenService.registerAccount(user as any)
     .catch(this.handleErrors);
     
  } */

  public signUp(user: User): Observable<User> {
    //var url = "http://api.taskmanager.test:3000/auth";
    var body = JSON.stringify(user);

    return this.http.post(this.url + '/auth', body, { headers: this.headers })
      .catch(this.handleErrors)
    //.map(response => response.json().data as User)
  }


  public signIn(uid: string, password: string) {
    // chamar metodo signIn do angular2token
    //retorna Observable<response>
  }

  public signOut() {
    // chamar metodo signOut do angular2token
    //retorna Observable<response>
  }

  public userSignedIn() {
    return this.tokenService.userSignedIn();
  }

  private handleErrors(error: Response) {
    console.log("DETALHES DO ERRO =>", error);
    return Observable.throw(error);
  }

}
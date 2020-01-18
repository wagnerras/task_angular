import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Angular2TokenService } from "angular2-token";

import { User } from "./user.model";

@Injectable()

export class AuthService {

  public constructor(private tokenService: Angular2TokenService){}

  public signUp(user: User){
    // chamar metodo sign up do angular2token
    //retorna Observable<response>
  }

  public signIn(uid: string, password: string){
    // chamar metodo signIn do angular2token
    //retorna Observable<response>
  }

  public signOut(){
    // chamar metodo signOut do angular2token
    //retorna Observable<response>
  }

  public isSignedIn(){
    // chamar metodo userSignedIn do angular2token 
    // retorna boolean
  }

  private handleErrors(error: Response) {
    console.log("DETALHES DO ERRO =>", error);
    return Observable.throw(error);
  }

}
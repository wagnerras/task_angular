import { Component } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})

export class NavbarComponent {
  public constructor(private authService: AuthService, public router: Router){}

  public signOutUser(){
    this.authService.signOut()
     .subscribe(
       () => this.router.navigate(['/sign-in'])
     )
  }
}
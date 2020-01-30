import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { FormUtils } from "../shared/form.utils";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;
  public submitted: boolean;
  public formErrors: Array<string>;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.setupForm();
    this.formUtils = new FormUtils(this.form);
    this.submitted = false;
    this.formErrors = null;
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  /* public signInUser() {
    this.submitted = true;
    let email = this.form.get('email').value;
    let password = this.form.get('password').value;
    this.authService.signIn(email, password)
      .subscribe(
        () => {
          alert('login Efetuado com sucesso!');
          this.router.navigate(['/dashboard']);
          this.formErrors = null;
        },
        (error) => {
          this.submitted = false;
          if (error.status === 401) {
            this.formErrors = JSON.parse(error._body).errors;
          } else {
            this.formErrors = ["Não foi possível processar a sua solicitação. Por favor tente mais tarde."]
          }
        }
      )
  } */

 
}
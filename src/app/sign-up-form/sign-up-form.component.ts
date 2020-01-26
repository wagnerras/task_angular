import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { FormUtils } from "../shared/form.utils";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { User } from "../shared/user.model";

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;

  public constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.setupForm();
    this.formUtils = new FormUtils(this.form);
  }

  public setupForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: [null, [Validators.required]]
    }, { validator: this.passwordConfirmationValidator })
  }

  public signUpUser() {
    this.authService.signUp(this.form.value as User)
     .subscribe(
       () => {
         alert('Parabens, sua conta foi criada com sucesso!');
         this.router.navigate(['/dashboard']);
       }
     )
  }

  public passwordConfirmationValidator(form: FormGroup) {
    if (form.get('password').value === form.get('passwordConfirmation').value) {
      form.get('passwordConfirmation').setErrors(null);
    } else {
      form.get('passwordConfirmation').setErrors({ 'mismatch': true });
    }
  }

}
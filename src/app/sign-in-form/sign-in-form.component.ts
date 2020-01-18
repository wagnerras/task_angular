import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.formUtils = new FormUtils(this.form);
  }

  public signInUser(){
    console.log("Formulário de SignIn Enviando!");
    console.log(this.form.value);
  }

}
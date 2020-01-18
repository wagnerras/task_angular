import { FormGroup } from "@angular/forms";

export class FormUtils {

  constructor(private form: FormGroup) {

  }

  //form errors

  public errorControl(field) {
    return {
      "text-danger": this.showFieldError(this.form.get(field)),
      "is-invalid": this.showFieldError(this.form.get(field))
    }
  }

  public showFieldError(field) {
    return field.invalid && (field.touched || field.dirty);
  }

}
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
      .map(v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);
        return totalChecked >= min ? { required: false } : { required: true };
    };
   return validator;
  }
}

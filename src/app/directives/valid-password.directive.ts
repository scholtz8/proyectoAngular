import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const validPasswordDirective = new ValidPasswordDirective();
    return validPasswordDirective.validate(control);
  }
}

@Directive({
  selector: '[appValidPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidPasswordDirective, multi: true }]
})

export class ValidPasswordDirective implements Validator {

  constructor() { }

  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const pass = <string>control.value;
    if (pass.length < 7 || !/\d/.test(pass) || pass === pass.toLocaleLowerCase() || pass === pass.toLocaleUpperCase())  { 
      return { 'res': { 'message': 'Mínimo 7 caracteres, debe incluir mayúsculas, minúsculas y carácteres numéricos.' } } 
    }
    return null;
  }
}


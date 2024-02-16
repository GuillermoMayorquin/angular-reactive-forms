import { EmailValidator } from './../../../shared/validators/email-validator.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public myForm: FormGroup= this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email:['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required, this.validatorsService.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]]

  },
  {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  isNotValidField(field: string){
    return this.validatorsService.isNotValidField(this.myForm, field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

  constructor(private fb: FormBuilder,
              private validatorsService: ValidatorsService,
               private emailValidator: EmailValidator){}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const rtx5090 = {
  name:'RTX 5090',
  price:2500,
  inStorage:3
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './basic-page.component.html',
  styles: ``
})

export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], [])
  // })

  //Esta es una mejor forma que la de arriba
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []], //El validador required es para que no pueda estar vacio
    price: [0, [Validators.required, Validators.min(0)], []],
    inStorage: [0, [Validators.required, Validators.min(0)], []]
  })


ngOnInit(): void {
  this.myForm.reset(rtx5090);
}


isNotValidField(field: string): boolean | null{
  return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
}

getFieldError(field: string): string | null {
  if ( !this.myForm.controls[field] ) return null;

  const errors = this.myForm.controls[field].errors || {};

  for (const key of Object.keys(errors) ) {
    switch ( key ) {
      case 'required':
        return 'Este campo es requerido'
      case 'minlength':
        return `Minimo ${errors['minlength'].requiredLength} caracteres.`
    }
  }


  return null;
}

  onSave(): void{
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    } //Si el formulario no es valido no retorna ningun valor
    console.log(this.myForm.value);
    this.myForm.reset({price: 0,inStorage:0})

  }
  constructor(private fb: FormBuilder){}
}

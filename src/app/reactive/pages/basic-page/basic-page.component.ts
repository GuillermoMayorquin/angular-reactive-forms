import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {
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

  onSave(): void{
    if (this.myForm.invalid) return; //Si el formulario no es valido no retorna ningun valor
    console.log(this.myForm.value);
  }
  constructor(private fb: FormBuilder){}
}

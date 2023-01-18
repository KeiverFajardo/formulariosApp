import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  //TODO : temporal
  //de la a-z y cualquier cantidad de elementos adicionales (+)
  nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFromulario : FormGroup = this.fb.group({
    nombre : ['', [ Validators.required , Validators.pattern(this.nombreApellidoPattern) ]],
    email : ['', [ Validators.required, Validators.pattern(this.emailPattern)]]
  })


  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.miFromulario.reset({
      nombre : 'Keiver',
      email : 'test1@test.com'
    })
  }

  campoNoValido(campo :string){
    return this.miFromulario.get(campo)?.invalid && 
            this.miFromulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFromulario.value);
    this.miFromulario.markAllAsTouched();
    
  }

}

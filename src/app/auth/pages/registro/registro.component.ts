import { Component, OnInit } from '@angular/core';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  miFromulario : FormGroup = this.fb.group({
    nombre : ['', [ Validators.required , Validators.pattern(this.validatorService.nombreApellidoPattern) ]],
    email : ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern)], [ this.emailValidator ] ],
    username : ['', [ Validators.required, this.validatorService.noPuedeSerStrider]],
    password : ['', [ Validators.required, Validators.minLength(6)]],
    password2 : ['', [ Validators.required ]]
  }, {
    Validators: [ this.validatorService.camposIguales('password', 'password2')]
  })

  constructor(private fb : FormBuilder,
              private validatorService : ValidatorService,
              private emailValidator : EmailValidatorService){}

  ngOnInit(): void {
    this.miFromulario.reset({
      nombre : 'Keiver',
      email : 'test1@test.com',
      username : 'keiver',
      password : '123456',
      password2 : '123456'
    })
  }

  get emailErrorMsg() : string {
    const errors = this.miFromulario.get('email')?.errors;
    if ( errors?.['required']){
      return 'Email es obligatorio'
    }else if ( errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo'
    }else if (errors?.['emailTomado']){
      return 'El emain ya fue tomado'
    }
    return '';
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

import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern          : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerStrider = (argunmento : FormControl) : ValidationErrors | null => {
    const valor:string = argunmento.value?.trim().toLowerCase();
    if ( valor === 'strider'){
      //return ERROR!
      return {
        noStrider : true
      } 
    }
    return null;
  }

  camposIguales(campo : string, campo2: string) {
    
    return ( formGroup : AbstractControl ): ValidationErrors | null => {

      const pass = formGroup.get(campo)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      
      console.log(pass, pass2);
      
      if(pass !== pass2)
      {
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales : true }
      }

      formGroup.get(campo2)?.setErrors( null )
      
      return null
    }
  }
}

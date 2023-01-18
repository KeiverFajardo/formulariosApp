import { FormControl } from '@angular/forms';

  //TODO : temporal
  //de la a-z y cualquier cantidad de elementos adicionales (+)
  export const nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  export const noPuedeSerStrider = (argunmento : FormControl) => {
    const valor:string = argunmento.value?.trim().toLowerCase();
    if ( valor === 'strider'){
      //return ERROR!
      return {
        noStrider : true
      } 
    }
    return null;
  }

  /* noPuedeSerStrider(argunmento : FormControl){
    const valor:string = argunmento.value?.trim().toLowerCase();
    if ( valor === 'strider'){
      //return ERROR!
      return {
        noStrider : true
      } 
    }
    return null;
  } */
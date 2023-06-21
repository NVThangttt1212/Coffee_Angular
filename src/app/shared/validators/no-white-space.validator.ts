import {AbstractControl, ValidationErrors} from "@angular/forms";

export function noWhiteSpaceValidator(
  control: AbstractControl ): ValidationErrors | null {
  const  { value: controlVal } = control;
  const isWhiteSpaceOnly = ( controlVal || '').trim().length === 0;
  return  isWhiteSpaceOnly ? { white: 'không được có ký tự trắng'} : null ;
}

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";


// export const valueValidator: ValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
//     const value = control.value as string

//     if (value.length >= 5 && value.length <= 10)
//         return of(null)
//     else
//         return of({
//             ctrlValue: {
//                 maxlength: 10,
//                 minlength: 5,
//                 length: value.length
//             }
//         })
// }

export const valueValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string

    if (value.length >= 5 && value.length <= 10)
        return null
    else
        return {
            ctrlValue: {
                maxlength: 10,
                minlength: 5,
                length: value.length
            }
        }
}
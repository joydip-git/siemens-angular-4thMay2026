import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string

    let lengthcheck = false
    if (value.length >= 5 && value.length <= 10)
        lengthcheck = true;

    if (!lengthcheck)
        return {
            passworderror: 'length of password should be between 5 and 10'
        }

    let uppercheck = false

    for (const char of value) {
        if (char >= 'A' && char <= 'Z') {
            uppercheck = true
            break
        }
    }
    if (!uppercheck)
        return {
            passworderror: 'password should have at least one upper case'
        }

    let lowercheck = false

    for (const char of value) {
        if (char >= 'a' && char <= 'z') {
            lowercheck = true
            break
        }
    }
    if (!lowercheck)
        return {
            passworderror: 'password should have at least one lower case'
        }

    let digitcheck = false

    for (const char of value) {
        if (char >= '0' && char <= '9') {
            digitcheck = true
            break
        }
    }
    if (!digitcheck)
        return {
            passworderror: 'password should have at least one digit'
        }

    return null
}
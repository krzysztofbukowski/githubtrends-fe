import {Directive, OnChanges, SimpleChanges} from "@angular/core";
import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidatorFn,
    Validators
} from "@angular/forms";
/**
 * Created by krzysztofbukowski on 26/03/2017.
 */

export function repositoryNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

        const name = control.value;
        const no = nameRe.test(name);

        return !no ? {"repositoryName": {name}} : null;
    };
}

@Directive({
    selector: "[repositoryName]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: RepositoryNameValidatorDirective,
        multi: true
    }]
})
export class RepositoryNameValidatorDirective implements OnChanges, Validator {

    private valFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes["repositoryName"];

        if (change) {
            const val: string | RegExp = change.currentValue;
            const re = val instanceof RegExp ? val : new RegExp(val, "i");
            this.valFn = repositoryNameValidator(re);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(c: AbstractControl): { [p: string]: any } {
        return this.valFn(c);
    }
}
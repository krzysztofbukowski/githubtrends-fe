import {Directive, Input, OnChanges, SimpleChanges} from "@angular/core";
import {AbstractControl, Validator, Validators} from "@angular/forms";
/**
 * Created by krzysztofbukowski on 26/03/2017.
 */

@Directive({
    selector: "[repository-name]"
})
export class RepositoryNameDirective  implements Validator, OnChanges {
    @Input() forbiddenName: string;

    private valFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        // const change = changes['forbiddenName'];
        // if (change) {
        //     const val: string | RegExp = change.currentValue;
        //     const re = val instanceof RegExp ? val : new RegExp(val, 'i');
        //     this.valFn = forbiddenNameValidator(re);
        // } else {
        //     this.valFn = Validators.nullValidator;
        // }
    }
    validate(control: AbstractControl): {[key: string]: any} {
        console.info(control);
        return this.valFn(control);
    }
}
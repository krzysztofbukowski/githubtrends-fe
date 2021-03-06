import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {RepositoriesService} from "../api/repositories.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: "compare-repositories",
    templateUrl: "compare-repositories.component.html",
    styleUrls: [
        "compare-repositories.component.scss"
    ]
})
export class CompareRepositoriesComponent implements OnInit {

    form: FormGroup;
    formErrors = {
        "repository1": "",
        "repository2": ""
    };

    repository1: string = "";
    repository2: string = "";
    formSubmitted: boolean;
    validationMessages: {};

    @Output() onResultAvailable = new EventEmitter<any>();

    constructor(private service: RepositoriesService,
                private formBuilder: FormBuilder) {

    }

    /**
     * Get stats about two given repositories using a service
     *
     * @param string repository1
     * @param string repository2
     */
    compare(repository1: string, repository2: string): void {

        let stats = this.service.getStats(repository1, repository2);
        stats.toPromise().then(
            response => {
                this.formSubmitted = false;
                if (this.validateData(response)) {
                    this.onResultAvailable.emit(response);
                } else {

                }
            }
        ).catch(() => {
            // @todo: handle error
        });
    }

    onValueChanged() {
        const form = this.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = "";
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + " ";
                }
            }
        }
    }

    onSubmit(): void {
        this.formSubmitted = true;
        this.onResultAvailable.emit(null);

        this.compare(
            this.form.value.repository1,
            this.form.value.repository2
        );
    }

    validateData(data: any): boolean {
        let result = data[0] !== null && data[1] !== null;

        if (data[0] == null) {
            this.formErrors.repository1 = this.validationMessages["repository1"]["notFound"];

        }

        if (data[1] == null) {
            this.formErrors.repository2 = this.validationMessages["repository2"]["notFound"];
        }
        //
        // this.repository1Error = data[0] === null ? CompareRepositoriesComponent.ERROR_NOT_FOUND : null;
        // this.repository2Error = data[1] === null ? CompareRepositoriesComponent.ERROR_NOT_FOUND : null;

        return result;
    }

    ngOnInit(): void {
        this.validationMessages = {
            repository1: {
                required: "Repository name can't be empty",
                pattern: "Invalid repository name",
                notFound: "Repository not found"
            },
            repository2: {
                required: "Repository name can't be empty",
                pattern: "Invalid repository name",
                notFound: "Repository not found"
            }
        };

        this.buildForm();
    };


    buildForm() {
        this.form = this.formBuilder.group({
            "repository1": [
                this.repository1,
                [
                    Validators.required,
                    Validators.pattern(/[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/),
                ]
            ],
            "repository2": [
                this.repository2,
                [
                    Validators.required,
                    Validators.pattern(/[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/),
                ]
            ],
        });

        this.form.valueChanges
            .subscribe(() => this.onValueChanged());
    }
}

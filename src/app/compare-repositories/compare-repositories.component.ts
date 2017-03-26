import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {RepositoriesService} from "../api/repositories.service";


@Component({
    selector: "compare-repositories",
    templateUrl: "compare-repositories.component.html",
    styleUrls: [
        "compare-repositories.component.scss"
    ]
})
export class CompareRepositoriesComponent implements OnInit {
    public static readonly ERROR_NOT_FOUND = "not_found";
    public static readonly ERROR_INVALID = "invalid";

    repo1: string = "angular/angular";
    repo2: string = "angular/angular.js";
    formSubmitted: boolean;
    repository1Error: string;
    repository2Error: string;
    messages: {};

    @Output() onResultAvailable = new EventEmitter<any>();

    constructor(private service: RepositoriesService) {
    }

    /**
     * Get stats about two given repositories using a service
     *
     * @param string repo1
     * @param string repo2
     */
    compare(repo1: string, repo2: string): void {
        this.formSubmitted = true;

        let stats = this.service.getStats(repo1, repo2);
        stats.toPromise().then(
            response => {
                this.formSubmitted = false;
                if (this.validateData(response)) {
                    this.onResultAvailable.emit(response);
                }
            }
        );
    }


    validateData(data: any): boolean {
        let result = data[0] !== null && data[1] !== null;

        this.repository1Error = data[0] === null ? CompareRepositoriesComponent.ERROR_NOT_FOUND : null;
        this.repository2Error = data[1] === null ? CompareRepositoriesComponent.ERROR_NOT_FOUND : null;

        return result;
    }

    ngOnInit(): void {
        this.messages = {};

        this.messages[CompareRepositoriesComponent.ERROR_NOT_FOUND] = "Repository not found";
        this.messages[CompareRepositoriesComponent.ERROR_INVALID] = "Incorrect repository name";
    };
}
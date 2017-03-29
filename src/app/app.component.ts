import {Component, Inject} from "@angular/core";
import {AppConfig} from "./config/app.config";
import {Head2HeadService} from "./head-2-head/head-2-head.service";

@Component({
    selector: "angular2-webpack-app",
    templateUrl: "app.component.html",
    styleUrls: [
        "app.component.scss"
    ]
})
export class AppComponent {

    repo1: string = "";
    repo2: string = "";
    result: any;
    showResult: boolean;

    constructor(@Inject("appConfig")config: AppConfig,
                private head2headService: Head2HeadService) {
    }

    onResultAvailable(data: any): void {
        if (data) {
            this.result = this.head2headService.transform(data);
        } else {
            this.result = null;
        }
    }
}

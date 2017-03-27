/**
 * Created by krzysztofbukowski on 26/03/2017.
 */
import {
    Component, Input, OnChanges, OnInit,
    SimpleChanges
} from "@angular/core";


@Component({
    selector: "head-2-head",
    templateUrl: "head-2-head.component.html",
    styleUrls: [
        "head-2-head.component.scss"
    ],
})
export class Head2HeadComponent implements OnInit, OnChanges {

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty("result")) {
            this.forks = changes.result.currentValue.forks;
            this.watchers = changes.result.currentValue.watchers;
            this.stars = changes.result.currentValue.stars;
            this.openPullRequests = changes.result.currentValue.open_pull_requests;
            this.closedPullRequests = changes.result.currentValue.closed_pull_requests;
            this.latestRelease = changes.result.currentValue.latest_release;
            this.lastMergedPullRequest = changes.result.currentValue.last_merged_pull_request;
        }
    }

    forks: {};
    latestRelease: {};
    stars: {};
    openPullRequests: {};
    closedPullRequests: {};
    watchers: {};
    lastMergedPullRequest: {};

    @Input()
    result: {};

    ngOnInit(): void {
    }
}
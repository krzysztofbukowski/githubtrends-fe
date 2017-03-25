import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RepositoriesService} from '../api/repositories.service';


@Component({
    selector: 'compare-repositories',
    templateUrl: 'compare-repositories.component.html',
    styleUrls: [
        'compare-repositories.component.scss'
    ]
})
export class CompareRepositoriesComponent {

    @Input()
    repo1: string;
    repo2: string;

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
        let stats = this.service.getStats(repo1, repo2);
        stats.toPromise().then(
            response => {
                this.onResultAvailable.emit(response.json());
            }
        );

    }
}
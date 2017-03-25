import {Component, Input} from '@angular/core';


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

    compare(repo1: string, repo2: string): void {
        console.log(repo1);
        console.log(repo2);
    }
}
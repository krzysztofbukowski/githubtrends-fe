import {Component, Inject, Input} from '@angular/core';
import {AppConfig} from './config/app.config';

@Component({
    selector: 'angular2-webpack-app',
    template: `
        <h1 class='title'>github trends</h1>
        <div class="container center">
            <input type="text" class="repository"
                   placeholder="Enter a github repository name"
                   [ngModel]="repo1"
            />
        </div>
    `,
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent {

    repo1: string = '';
    repo2: string;

    constructor(@Inject('appConfig')config: AppConfig) {
    }
}

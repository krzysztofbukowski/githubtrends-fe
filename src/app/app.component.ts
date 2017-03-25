import {Component, Inject, Input} from '@angular/core';
import {AppConfig} from './config/app.config';

@Component({
    selector: 'angular2-webpack-app',
    template: `
        <h1 class='title'>github trends</h1>
        <p class="subtitle">Compare github repositories</p>
        <div class="container center">
            <compare-repositories></compare-repositories>
        </div>
    `,
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent {

    repo1: string = '';
    repo2: string = '';

    constructor(@Inject('appConfig')config: AppConfig) {
    }
}

import {Component, Inject} from '@angular/core';
import {AppConfig} from './config/app.config';

@Component({
    selector: 'angular2-webpack-app',
    template: `
<h1 class='title'>Hello Angular 2!</h1>
<packages></packages>
`,
    styles: [`
        .title {
            font-family: Lato;
            background: crimson;
            color: white;
            padding: 10px;
        }
        `
    ]
})
export class AppComponent {

    constructor(@Inject('appConfig')config:AppConfig) {
        console.log(config);
    }

    /**
     * Returns the component's name
     *
     * @returns {string}
     */
    getName(): string {
        return 'AppComponent';
    }
}

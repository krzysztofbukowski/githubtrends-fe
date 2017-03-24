import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {PackagesComponent} from "./packages.component";
import {ConfigManager} from './config/config-manager';
import {DevelopmentConfig} from './config/development.config';
import {TestingConfig} from './config/testing.config';

var configManager:ConfigManager = new ConfigManager();
configManager.addConfig('development', new DevelopmentConfig());
configManager.addConfig('testing', new TestingConfig());

declare var process:any;

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        PackagesComponent
    ],
    providers: [{
        provide: 'appConfig',
        useValue: configManager.getConfig(process.env.ENV)
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {AppComponent} from './app.component';
import {ConfigManager} from './config/config-manager';
import {DevelopmentConfig} from './config/development.config';
import {TestingConfig} from './config/testing.config';
import {ProductionConfig} from './config/production.config';
import {CompareRepositoriesComponent} from './compare-repositories/compare-repositories.component';
import {RepositoriesService} from './api/repositories.service';


let configManager: ConfigManager = new ConfigManager();
configManager.addConfig('development', new DevelopmentConfig());
configManager.addConfig('testing', new TestingConfig());
configManager.addConfig('testing', new ProductionConfig());

declare var process: any;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CompareRepositoriesComponent
    ],
    providers: [{
        provide: 'appConfig',
        useValue: configManager.getConfig(process.env.ENV)
    },
        RepositoriesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ConfigManager} from "./config/config-manager";
import {DevelopmentConfig} from "./config/development.config";
import {TestingConfig} from "./config/testing.config";
import {ProductionConfig} from "./config/production.config";
import {CompareRepositoriesComponent} from "./compare-repositories/compare-repositories.component";
import {RepositoriesService} from "./api/repositories.service";
import {RepositoryNameValidatorDirective} from "./compare-repositories/repository-name.directive";
import {Head2HeadComponent} from "./head-2-head/head-2-head.component";
import {Head2HeadChartComponent} from "./head-2-head/head-2-head-chart.component";
import {Head2HeadService} from "./head-2-head/head-2-head.service";


const configManager: ConfigManager = new ConfigManager();
configManager.addConfig("development", new DevelopmentConfig());
configManager.addConfig("testing", new TestingConfig());
configManager.addConfig("testing", new ProductionConfig());

declare var process: any;

const env = process.env.ENV || "development";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CompareRepositoriesComponent,
        RepositoryNameValidatorDirective,
        Head2HeadComponent,
        Head2HeadChartComponent
    ],
    providers: [{
        provide: "appConfig",
        useValue: configManager.getConfig(env)
    },
        RepositoriesService,
        Head2HeadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

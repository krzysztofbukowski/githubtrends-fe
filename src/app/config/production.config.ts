import {AppConfig} from './app.config';

export class ProductionConfig implements AppConfig {
    apiHost:string = "https://api.githubtrends.pl/"
}

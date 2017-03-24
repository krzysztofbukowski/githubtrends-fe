import {AppConfig} from './app.config';

export class DevelopmentConfig implements AppConfig {
    apiEndpoint:string = "https://localhost/api/v1"
}

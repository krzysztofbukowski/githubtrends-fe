import {AppConfig} from './app.config';

export class TestingConfig implements AppConfig {
    apiEndpoint:string = "https://testing/api/v1"
}

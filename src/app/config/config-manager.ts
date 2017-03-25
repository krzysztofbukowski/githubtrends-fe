import {AppConfig} from "./app.config";

export class ConfigManager {

    configs:{} = {}

    addConfig(env:string, config:AppConfig):void {
        this.configs[env] = config;
    }

    getConfig(env:string):AppConfig {
        return this.configs[env];
    }
}

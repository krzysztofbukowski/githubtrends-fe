import {ConfigManager} from './config-manager';
import {AppConfig} from './app.config';

describe('ConfigManager', () => {

    let configManager:ConfigManager;

    beforeEach(() => {
        configManager = new ConfigManager();
    })

    it('should allow adding and retrieving config', () => {
        let config:AppConfig = <AppConfig> {
            apiEndpoint: "https://test:9999"
        };

        configManager.addConfig('production', config);
        let result = configManager.getConfig('production');

        expect(result).to.be.eql(config);
    })

    it('should return undefined if config not found', () => {
        let result = configManager.getConfig('this does not exist');
        expect(result).to.be.undefined;
    })
});

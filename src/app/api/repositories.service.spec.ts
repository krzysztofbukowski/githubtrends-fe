import {RepositoriesService} from "./repositories.service";
import {ReflectiveInjector} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {
    BaseRequestOptions,
    ConnectionBackend,
    Http,
    RequestOptions
} from "@angular/http";

describe("RepositoriesService", () => {

    let repositoriesService: RepositoriesService;
    let backend: MockBackend;
    let lastConnection: MockConnection;

    beforeEach(() => {
            this.injector = ReflectiveInjector.resolveAndCreate([
                {provide: ConnectionBackend, useClass: MockBackend},
                {provide: RequestOptions, useClass: BaseRequestOptions},
                {
                    provide: "appConfig",
                    useValue: {
                        "apiHost": "http://api.localhost"
                    }
                },
                Http,
                RepositoriesService,
            ]);
            repositoriesService = this.injector.get(RepositoriesService);
            backend = this.injector.get(ConnectionBackend) as MockBackend;
            backend.connections.subscribe(
                (connection: any) => lastConnection = connection
            );
        }
    );

    it("should create an instance of RepositoriesService", () => {
        expect(repositoriesService).to.be.instanceOf(RepositoriesService);
    });

    describe("getStats", () => {
        it("should call current service url", () => {
            repositoriesService.getStats("repo1", "repo2");
            expect(lastConnection).to.not.be.undefined;
        });
    });


});
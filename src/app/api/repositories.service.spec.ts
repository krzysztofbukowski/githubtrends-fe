import {RepositoriesService} from "./repositories.service";
import {ReflectiveInjector} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {
    BaseRequestOptions,
    ConnectionBackend,
    Http,
    RequestOptions
} from "@angular/http";
import {TestBed} from "@angular/core/testing";

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

    describe("getEndpoint", () => {
        it("should return the endpoint string", () => {
            let config = this.injector.get("appConfig");

            let result = repositoriesService.getEndpoint(
                "owner1/repository1",
                "owner2/repository2"
            );

            expect(result).to.be.string;
            expect(result).to.be.eq(config.apiHost + "/repos/owner1/repository1,owner2/repository2");
        });
    });



    describe("getStats", () => {
        it("should call current service url", () => {
            let http = this.injector.get(Http);
            let getStub = sinon.stub(http, "get");
            getStub.returns({
                map: () => {}
            });

            repositoriesService.getStats("repository1", "repository2");
            expect(getStub.calledOnce).to.be.true;
        });
    });


});
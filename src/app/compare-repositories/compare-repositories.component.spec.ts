/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CompareRepositoriesComponent} from "./compare-repositories.component";
import {FormsModule} from "@angular/forms";
import {RepositoriesService} from "../api/repositories.service";
import {HttpModule} from "@angular/http";

describe("CompareRepositoriesComponent", () => {
    let comp: CompareRepositoriesComponent;
    let fixture: ComponentFixture<CompareRepositoriesComponent>;


    function createGetStatsStub(promise: Promise<any>): any {
        let service = TestBed.get(RepositoriesService);
        return sinon.stub(service, "getStats")
            .returns({
                toPromise: () : Promise<any> => {
                    return promise;
                }
            });
    };

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule
            ],
            declarations: [
                CompareRepositoriesComponent
            ],
            providers: [
                RepositoriesService,
                {
                    provide: "appConfig",
                    useValue: {}
                }
            ]
        });

        fixture = TestBed.createComponent(CompareRepositoriesComponent);
        comp = fixture.componentInstance;
    });

    it("should create an instance of CompareRepositoriesComponent", () => {
        expect(comp).to.be.instanceOf(CompareRepositoriesComponent);
    });

    describe("compare", () => {
        it("should call api to get details about repositories", () => {
            let getStatsStub = createGetStatsStub(
                new Promise((resolve, reject) => {
                    resolve({
                        json: (): any =>  []
                    });
                })
            );

            comp.compare("repo1", "repo2");
            expect(getStatsStub.calledOnce).to.be.true;
        });

        it("should emit the onResultAvailable event on success", (done) => {
            let onResultAvailableSpy = sinon.spy(comp.onResultAvailable, "emit");

            let promise = new Promise((resolve, reject) => {
                resolve({
                    json: (): any =>  []
                });
            });

            let stub = createGetStatsStub(promise);
            comp.compare("repo1", "repo2");

            promise.then(() => {
                expect(onResultAvailableSpy.withArgs([]).calledOnce).to.be.true;
                done();
            });

        });
    });

});

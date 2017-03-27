/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CompareRepositoriesComponent} from "./compare-repositories.component";
import {FormsModule} from "@angular/forms";
import {RepositoriesService} from "../api/repositories.service";
import {HttpModule} from "@angular/http";
import {Head2HeadComponent} from "../head-2-head/head-2-head.component";
import {Head2HeadChartComponent} from "../head-2-head/head-2-head-chart.component";

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
                CompareRepositoriesComponent,
                Head2HeadComponent,
                Head2HeadChartComponent
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

            createGetStatsStub(promise);
            comp.compare("repo1", "repo2");

            promise.then(() => {
                expect(onResultAvailableSpy.withArgs([]).calledOnce).to.be.true;
                done();
            }).catch(() => {
                done();
            });

        });
    });

    describe("validateData", () => {
        it("should set not found flag if the repository 1 is null", () => {
            comp.validateData([null, {}]);
            expect(comp.repository1Error).to.be.eq(CompareRepositoriesComponent.ERROR_NOT_FOUND);
        });

        it("should set not found flag if the repository 2 is null", () => {
            comp.validateData([null, null]);
            expect(comp.repository2Error).to.be.eq(CompareRepositoriesComponent.ERROR_NOT_FOUND);
        });
    });

    describe("ngOnInit", () => {
        it("should initialise messeges", () => {
           comp.ngOnInit();

           expect(comp.messages).to.not.be.null;
           expect(comp.messages).to.haveOwnProperty(CompareRepositoriesComponent.ERROR_NOT_FOUND);
           expect(comp.messages).to.haveOwnProperty(CompareRepositoriesComponent.ERROR_INVALID);
        });
    });

});

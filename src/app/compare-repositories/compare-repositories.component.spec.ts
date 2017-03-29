/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CompareRepositoriesComponent} from "./compare-repositories.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RepositoriesService} from "../api/repositories.service";
import {HttpModule} from "@angular/http";
import {Head2HeadComponent} from "../head-2-head/head-2-head.component";
import {Head2HeadChartComponent} from "../head-2-head/head-2-head-chart.component";
import {Observable} from "rxjs";
import { LoadingIconComponent } from "../loading-icon/loading-icon.component";

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
                HttpModule,
                ReactiveFormsModule
            ],
            declarations: [
                CompareRepositoriesComponent,
                Head2HeadComponent,
                Head2HeadChartComponent,
                LoadingIconComponent
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

            comp.compare("repository1", "repository2");
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
            comp.compare("repository1", "repository2");

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

           expect(comp.validationMessages).to.not.be.null;
        });
    });

    describe("onSubmit", () => {
        it("should trigger compare", () => {
            comp.buildForm();
            comp.form.value.repository1 = "angular/angular";
            comp.form.value.repository2 = "angular/angular.js";

            let getStatsStub = sinon.stub(TestBed.get(RepositoriesService), "getStats");
            getStatsStub.withArgs(
                comp.form.value.repository1,
                comp.form.value.repository2
            ).returns(new Observable<Response>());

            comp.onSubmit();

            expect(getStatsStub.calledOnce).to.be.true;
        });

        it("should set formSubmitted to true", () => {
            comp.buildForm();
            comp.form.value.repository1 = "angular/angular";
            comp.form.value.repository2 = "angular/angular.js";

            let getStatsStub = sinon.stub(TestBed.get(RepositoriesService), "getStats");
            getStatsStub.withArgs(
                comp.form.value.repository1,
                comp.form.value.repository2
            ).returns(new Observable<Response>());

            comp.onSubmit();

            expect(comp.formSubmitted).to.be.true;
        });
    });

});

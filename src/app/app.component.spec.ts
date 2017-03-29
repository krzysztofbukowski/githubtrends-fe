import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {CompareRepositoriesComponent} from "./compare-repositories/compare-repositories.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RepositoriesService} from "./api/repositories.service";
import {HttpModule} from "@angular/http";
import {Head2HeadComponent} from "./head-2-head/head-2-head.component";
import {Head2HeadChartComponent} from "./head-2-head/head-2-head-chart.component";
import {Head2HeadService} from "./head-2-head/head-2-head.service";
import { LoadingIconComponent } from "./loading-icon/loading-icon.component";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let comp: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule,
                ReactiveFormsModule
            ],
            declarations: [
                AppComponent,
                CompareRepositoriesComponent,
                Head2HeadComponent,
                Head2HeadChartComponent,
                LoadingIconComponent
            ],
            providers: [
                {
                    provide: "appConfig",
                    useValue: {}
                },
                RepositoriesService,
                Head2HeadService
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it("should create an instance of AppComponent", () => {
        expect(comp).to.be.instanceOf(AppComponent);
    });

    describe("onResultAvailable", () => {
        it("should use head 2 head service to transform data if data valid", () => {
            let service = TestBed.get(Head2HeadService);
            let transformStub = sinon.stub(service, "transform");

            transformStub.returns([1, 2]);
            comp.onResultAvailable([1, 2]);

            expect(comp.result).to.be.eql([1, 2]);
            expect(transformStub.calledOnce).to.be.true;
        });
    });

});

import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Head2HeadComponent} from "./head-2-head.component";
import {Head2HeadProperties} from "./head-2-head";
import {Head2HeadChartComponent} from "./head-2-head-chart.component";


describe("Head2HeadComponent", () => {
    let fixture: ComponentFixture<Head2HeadComponent>;
    let comp: Head2HeadComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule
            ],
            declarations: [
                Head2HeadComponent,
                Head2HeadChartComponent
            ],
            providers: [
                {
                    provide: "appConfig",
                    useValue: {}
                },
            ]
        });

        fixture = TestBed.createComponent(Head2HeadComponent);
        comp = fixture.componentInstance;
    });

    it("should create an instance of Head2HeadComponent", () => {
        expect(comp).to.be.instanceOf(Head2HeadComponent);
    });

    describe("onInit", () => {

    });

});

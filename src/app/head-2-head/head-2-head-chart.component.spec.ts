import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Head2HeadChartComponent} from "./head-2-head-chart.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe("Head2HeadChartComponent", () => {
    let fixture: ComponentFixture<Head2HeadChartComponent>;
    let comp: Head2HeadChartComponent;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule
            ],
            declarations: [
                Head2HeadChartComponent,
            ],
            providers: [
                {
                    provide: "appConfig",
                    useValue: {}
                },
            ]
        });

        fixture = TestBed.createComponent(Head2HeadChartComponent);
        comp = fixture.componentInstance;
        debugElement = fixture.debugElement;
    });

    it("should create an instance of Head2HeadChartComponent", () => {
        expect(comp).to.be.instanceOf(Head2HeadChartComponent);
    });

    describe("html markup", () => {
        it("should contain .head-2-head-chart element", () => {
            let el = debugElement.query(By.css(".head-2-head-chart"));
            expect(el).to.not.be.null;
        });

        it("should contain .head-2-head-chart-item elements", () => {
            comp.items = [
                {
                    name: "angular/angular",
                    value: 1234
                },
                {
                    name: "angular/angular.js",
                    value: 4321
                }
            ];

            fixture.detectChanges();

            let el = debugElement.query(By.css(".head-2-head-chart-item"));
            expect(el).to.not.be.null;
        });
    });
});

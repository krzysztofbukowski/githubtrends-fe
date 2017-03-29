/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoadingIconComponent } from "./loading-icon.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("LoadingIconComponent", () => {
    let comp: LoadingIconComponent;
    let fixture: ComponentFixture<LoadingIconComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
            ],
            declarations: [
                LoadingIconComponent
            ],
            providers: [

            ]
        });

        fixture = TestBed.createComponent(LoadingIconComponent);
        comp = fixture.componentInstance;
        debugElement = fixture.debugElement;
    });

    it("should create an instance of LoadingIconComponent", () => {
        expect(comp).to.be.instanceOf(LoadingIconComponent);
    });

    describe("html markup", () => {
        it("should contain .loading-icon element", () => {
            let el = debugElement.query(By.css(".loading-icon"));
            expect(el).to.not.be.null;
        });

        it("should contain .loading-icon-item elements", () => {
            fixture.detectChanges();

            let el = debugElement.query(By.css(".loading-icon-item"));
            expect(el).to.not.be.null;
        });
    });
});

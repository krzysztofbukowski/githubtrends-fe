/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CompareRepositoriesComponent} from './compare-repositories.component';
import {FormsModule} from '@angular/forms';

describe('CompareRepositoriesComponent', () => {
    let comp: CompareRepositoriesComponent;
    let fixture: ComponentFixture<CompareRepositoriesComponent>;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                CompareRepositoriesComponent
            ],
        });

        fixture = TestBed.createComponent(CompareRepositoriesComponent);
        comp = fixture.componentInstance;
    });

    it('should create an instance of CompareRepositoriesComponent', () => {
        expect(comp).to.be.instanceOf(CompareRepositoriesComponent);
    });

    describe('compare', () => {
        it('should call api to get details about repositories', () => {


        });
    });

});

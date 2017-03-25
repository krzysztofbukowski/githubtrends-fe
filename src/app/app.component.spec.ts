import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CompareRepositoriesComponent} from './compare-repositories/compare-repositories.component';
import {FormsModule} from '@angular/forms';
import {RepositoriesService} from './api/repositories.service';
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let comp: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule
            ],
            declarations: [
                AppComponent,
                CompareRepositoriesComponent
            ],
            providers: [
                {
                    provide: 'appConfig',
                    useValue: {}
                },
                RepositoriesService
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it('should create an instance of AppComponent', () => {
        expect(comp).to.be.instanceOf(AppComponent);
    });

    describe('onResultAvailable', () => {

        it('should modify results', () => {
            comp.onResultAvailable([1, 2]);

            expect(comp.result).to.be.eql([1, 2]);
        });
    });

});

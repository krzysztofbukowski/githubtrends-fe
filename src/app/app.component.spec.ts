import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CompareRepositoriesComponent} from './compare-repositories/compare-repositories.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AppComponent,
                CompareRepositoriesComponent
            ],
            providers: [
                {
                    provide: 'appConfig',
                    useValue: {}
                }
            ]
        }).compileComponents().then(() => {
            done();
        }).catch((e) => {
            done();
        });
    });

    it('should create an instance of AppComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance).to.be.instanceOf(AppComponent);
    });

});

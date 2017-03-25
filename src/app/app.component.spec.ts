import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach((done) => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
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

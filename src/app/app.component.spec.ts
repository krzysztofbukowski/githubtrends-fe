import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {PackagesComponent} from "./packages.component";

describe('AppComponent', () => {
    beforeEach((done) => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                PackagesComponent
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

    describe('getName', () => {
        it('should return component\'s name', () => {
            let fixture = TestBed.createComponent(AppComponent);
            expect(fixture.componentInstance.getName()).to.be.eql('AppComponent');
        });
    });

});

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {PackagesComponent} from './packages.component';

describe('PackagesComponent', () => {
    var fixture:ComponentFixture<any>;

    beforeEach((done) => {
        TestBed.configureTestingModule({declarations: [PackagesComponent]})
            .compileComponents().then(() => {
                fixture = TestBed.createComponent(PackagesComponent);
                done();
            }
        ).catch((e) => {
            done();
        });

    });

    it('should create an instance of PackagesComponent', () => {
        expect(fixture.componentInstance).to.be.instanceOf(PackagesComponent);
    });

});

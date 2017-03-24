/**
 * Created by krzysztofbukowski on 05/03/2017.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: 'src/app/packages',
    selector: 'packages',
    templateUrl: 'packages.component.html',
    styles: [`
    .packages {
        font-size: 2em;
        font-family: monospace;
        white-space: pre;
    }
`
    ]
})
export class PackagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
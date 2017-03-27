import {Component, Input, OnInit} from "@angular/core";
/**
 * Created by krzysztofbukowski on 27/03/2017.
 */
@Component({
    selector: "head-2-head-chart",
    template: `
<div class="head-2-head-chart">
    <div class="head-2-head-chart-item">
        {{items[0].name}}: {{items[0].value}}
    </div>
    <div class="head-2-head-chart-item">
        {{items[1].name}}: {{items[1].value}}
    </div>    
</div>        
    `,
    styleUrls: [
        "head-2-head-chart.component.scss"
    ]
})
export class Head2HeadChartComponent implements OnInit {

    @Input()
    items: {}[];


    ngOnInit(): void {
    }
}
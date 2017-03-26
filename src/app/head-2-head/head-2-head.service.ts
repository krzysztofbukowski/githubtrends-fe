/**
 * Created by krzysztofbukowski on 27/03/2017.
 */
import {Injectable} from "@angular/core";
@Injectable()
export class Head2HeadService {
    private properties: string[] = [
        "forks",
        "full_name",
        "last_merged_pull_request",
        "latest_release",
        "open_pull_requests",
        "closed_pull_requests",
        "stars",
        "watchers"
    ];

    transform(data: any): any {
        let item1 = data[0];
        let item2 = data[1];

        let result = {};

        this.properties.forEach((prop) => {
            result[prop] = [
                {
                    name: item1.full_name,
                    value: item1[prop]
                },
                {
                    name: item2.full_name,
                    value: item2[prop]
                }
            ];
        });

        return result;
    }
}
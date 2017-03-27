import {Head2HeadService} from "./head-2-head.service";

/**
 * Created by krzysztofbukowski on 27/03/2017.
 */
describe("Head2HeadService", () => {
    let head2headService: Head2HeadService;

    beforeEach(() => {
        head2headService = new Head2HeadService();
    });

    describe("transform", () => {
        it("should transform backend response", () => {
            let data: any = [
                {
                    "forks": 5697,
                    "watchers": 22350,
                    "stars": 22350,
                    "full_name": "angular/angular",
                    "latest_release": null,
                    "open_pull_requests": 132,
                    "closed_pull_requests": 5715,
                    "last_merged_pull_request": "2017-03-27T09:10:35Z"
                },
                {
                    "forks": 27584,
                    "watchers": 55223,
                    "stars": 55223,
                    "full_name": "angular/angular.js",
                    "latest_release": null,
                    "open_pull_requests": 176,
                    "closed_pull_requests": 7208,
                    "last_merged_pull_request": "2017-03-22T21:49:58Z"
                }
            ];


            let result = head2headService.transform(data);
            expect(result).to.not.be.null;
            expect(result).to.haveOwnProperty("forks");
            expect(result).to.haveOwnProperty("watchers");
            expect(result).to.haveOwnProperty("stars");
            expect(result).to.haveOwnProperty("full_name");
            expect(result).to.haveOwnProperty("latest_release");
            expect(result).to.haveOwnProperty("open_pull_requests");
            expect(result).to.haveOwnProperty("closed_pull_requests");
            expect(result).to.haveOwnProperty("last_merged_pull_request");
        });
    });
});
/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import {Inject, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AppConfig} from "../config/app.config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RepositoriesService {
    private apiEndpoint: string;

    constructor(private http: Http, @Inject("appConfig")config: AppConfig) {
        this.apiEndpoint = config.apiHost + "/repos/";
    }

    /**
     * Gets stats about two given github repositories
     *
     * @param string repository
     * @param string repository2
     * @returns {Observable<Response>}
     */
    getStats(repository: string, repository2: string): Observable<Response> {
        return this.http.get(
            this.getEndpoint(repository, repository2)
        ).map(e => {
            return e.json();
        });
    }

    getEndpoint(repository1: string, repository2: string): string {
        return this.apiEndpoint + [repository1, repository2].join(",");
    }
}
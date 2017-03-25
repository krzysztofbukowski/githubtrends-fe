/**
 * Created by krzysztofbukowski on 25/03/2017.
 */
import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppConfig} from '../config/app.config';
import {Observable} from 'rxjs';

@Injectable()
export class RepositoriesService {

    config: AppConfig;

    constructor(private http: Http, @Inject('appConfig')config: AppConfig) {
        this.config = config;
    }

    /**
     * Gets stats about two given github repositories
     *
     * @param string repository
     * @param string repository2
     * @returns {Observable<Response>}
     */
    getStats(repository: string, repository2: string): Observable<any> {
        return this.http.get(
            this.config.apiHost
        );
    }
}
import { Injectable } from "@angular/core";
import { IMovie, IData, IDetail, ICrewsAndCasts } from "./movie";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MovieService {
    _key: string = "f3e9f7d1677c7aa63c9ab526381eeceb";
    _url: string = "https://api.themoviedb.org/3/movie/";
    constructor(private _http: HttpClient) {
    }

    getUpcoming(page: number): Observable<IData> {
        return this._http.get<IData>(`${this._url}upcoming?api_key=${this._key}&language=en-US&page=${page}`)
            // .do(e => console.log(JSON.stringify(e)))
            .catch(this.handleError);
    }

    getDetails(movieId: number): Observable<IDetail> {
        return this._http.get<IDetail>(`${this._url}${movieId}?api_key=${this._key}&language=en-US`)
            .do(e => console.log(JSON.stringify(e)))
            .catch(this.handleError);
    }

    getCredits(movieId: number): Observable<ICrewsAndCasts> {
        return this._http.get<IDetail>(`${this._url}${movieId}/credits?api_key=${this._key}&language=en-US`)
            .do(e => console.log(JSON.stringify(e)))
            .catch(this.handleError);
    }

    private handleError(exception: HttpErrorResponse) {
        console.log(exception);
        return Observable.throw(exception);
    }
} 
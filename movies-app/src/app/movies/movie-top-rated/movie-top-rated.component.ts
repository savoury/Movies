import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IData, IMovie } from '../movie';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './../movie-detail/movie-detail.component.html',
    styleUrls: ['./../movie-detail/movie-detail.component.css']
})
export class MovieTopRatedComponent implements OnInit {

    _data: IData;
    _movies: IMovie[];
    _errorMessage: string;

    constructor(private _movieService: MovieService) {
    }

    ngOnInit(): void {
        this._movieService.getTopRated(1).subscribe(e => {
            this._data = e;
            this._movies = this._data.results;
        }, err => this._errorMessage = <any>err);
    }
}

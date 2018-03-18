import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
    _listFilter: string;
     pageTitle = 'Upcoming';
     filteredMovies: IMovie[];
     movies: IMovie[];

    constructor(private _movieService: MovieService) {
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredMovies = this._listFilter ? this.filtered(this.listFilter) : this.movies;
    }    

    filtered(filterBy: string): IMovie[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((e: IMovie) =>
            e.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
       this.movies = this._movieService.getUpcomingMovies();
       this.filteredMovies = this.movies;
    }
   
    onRatingClicked(message: string): void {
        console.log(message);
    }
}

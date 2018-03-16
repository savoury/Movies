import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
    _listFilter: string;
    pageTitle = 'Upcoming';

    constructor() {
        this.filteredMovies = this.movies;
        this.listFilter = '';
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredMovies = this._listFilter ? this.filtered(this.listFilter) : this.movies;
    }

    filteredMovies: IMovie[];
    movies: IMovie[] = [
        {
            'release_date': 'March 19, 2016',
            'title': 'Leaf rake with 48-inch wooden handle. -',
            'popularity': 3.2,
            'poster_path': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
            'vote_count': 0,
            'id': 0,
            'video': false,
            'original_language': '',
            'original_title': '',
            'genre_ids': [],
            'backdrop_path': '',
            'adult': false,
            'overview': '',
            'vote_average': 0,
        },
        {
            'release_date': 'March 18, 2016',
            'title': '15-gallon capacity rolling garden cart',
            'popularity': 4.2,
            'poster_path': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
            'vote_count': 0,
            'id': 0,
            'video': false,
            'original_language': '',
            'original_title': '',
            'genre_ids': [],
            'backdrop_path': '',
            'adult': false,
            'overview': '',
            'vote_average': 0,
        }
    ];

    ngOnInit(): void {
        console.log('onInit');
    }

    filtered(filterBy: string): IMovie[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((e: IMovie) =>
            e.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}

import { Component, OnInit } from "@angular/core";
import { IMovie, IData } from "./movie";
import { MovieService } from "./movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html"
})
export class MovieListComponent implements OnInit {
  _listFilter: string;
  _errorMessage: string;
  pageTitle = "Upcoming";
  filteredMovies: IMovie[];
  result: IData;

  constructor(private _movieService: MovieService) {}

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this._listFilter
      ? this.filtered(this.listFilter)
      : this.result.results;
  }

  filtered(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.result.results.filter(
      (e: IMovie) => e.title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this._movieService.getUpcoming(1).subscribe(e => {
      this.result = e;
      this.filteredMovies = this.result.results;
     }, err => this._errorMessage = <any>err);
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }
}

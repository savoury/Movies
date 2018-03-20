import { Component, OnInit } from '@angular/core';
import { IMovie, IDetail, IGenre } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  _title: string = "Movie Details"
  movieDetail: IDetail;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _movieService: MovieService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._movieService.getDetails(id).subscribe(
      e => this.movieDetail = e,
      err => this.errorMessage = <any>err
    );
  }

  getGenresFormatted(genres: IGenre[]): string {
    return genres.map(function (elem) {
      return elem.name;
    }).join(", ");
  }

}

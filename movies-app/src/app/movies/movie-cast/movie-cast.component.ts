import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { ICrewsAndCasts, Cast } from '../movie';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css']
})
export class MovieCastComponent implements OnInit {
  @Input() id: number;
  allDataFetched = false;
  _title = 'Casting';
  errorMessage: string;
  data: ICrewsAndCasts;
  casts: Cast[];

  constructor(private _route: ActivatedRoute,
    private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getCredits(this.id).subscribe(
      e => {
      this.data = e;
      this.casts = e.cast;
      this.allDataFetched = true;
      },
      err => this.errorMessage = <any>err
    );
  }

}

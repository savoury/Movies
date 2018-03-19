import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  _title: string = "Movie Details"
  _movie: IMovie;
  constructor() { }

  ngOnInit() {
  }

}

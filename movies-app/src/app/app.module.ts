import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { ConvertSpecialCharToSpace } from './shared/convertSpecialCharToSpace.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MovieCastComponent } from './movies/movie-cast/movie-cast.component';
import { MovieDetailGuardService } from './movies/movie-detail/movie-detail-guard.service';
import { MovieTopRatedComponent } from './movies/movie-top-rated/movie-top-rated.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertSpecialCharToSpace,
    StarComponent,
    MovieDetailComponent,
    MovieCastComponent,
    MovieTopRatedComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieListComponent},
      { path: 'moviesTR', component: MovieTopRatedComponent},
      { path: 'movies/:id', component: MovieDetailComponent, canActivate: [MovieDetailGuardService]},
      { path: '', redirectTo: 'movies', pathMatch: 'full'},
      { path: '**', redirectTo: 'movies', pathMatch: 'full'}
    ], )
  ],
  providers: [MovieDetailGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

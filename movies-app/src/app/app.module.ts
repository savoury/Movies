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


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertSpecialCharToSpace,
    StarComponent,
    MovieDetailComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieListComponent},
      { path: 'movies/:id', component: MovieDetailComponent},
      { path: '', redirectTo: 'movies', pathMatch: 'full'},
      { path: '**', redirectTo: 'movies', pathMatch: 'full'}
    ], )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

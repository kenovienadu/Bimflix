import { MovieService } from './services/movies.service';
import { IMovie } from './shared/movie.interface';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bimflix';
  movies: IMovie[];

  constructor(private movieService: MovieService) {
    this.movieService.getMoviesAsync();
  }

}

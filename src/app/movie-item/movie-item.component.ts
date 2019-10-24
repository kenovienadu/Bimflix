import { MovieService } from './../services/movies.service';
import { IMovie } from './../shared/movie.interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie: IMovie;
  constructor(private movieService: MovieService) { }


  toggleFavorite() {
    this.movie.isFavorite = !this.movie.isFavorite;

    if (this.movie.isFavorite) {
      this.addFavorite();
    }

    if (!this.movie.isFavorite) {
      this.removeFavorite();
    }

    this.movieService.saveFavToSession();
  }

  addFavorite() {

    if (!this.checkMovieInFav()) {
      this.movieService.favorites.push(this.movie);
      console.log(this.movieService.favorites.length);
    }

  }

  removeFavorite() {
    if (this.checkMovieInFav()) {
      const index = this.movieService.favorites.indexOf(this.movie);
      if (index !== undefined) {
        this.movieService.favorites.splice(index, 1);
        console.log(this.movieService.favorites.length);
      }
    }
  }

  checkMovieInFav(): boolean {
    const check = this.movieService.favorites.find(movie => movie.id === this.movie.id);

    if (check) {
      return true;
    }

    return false;
  }

}

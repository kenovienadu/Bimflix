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

  // toggles a boolean property of a movie. The icons on the component changes due to the state of this property
  toggleFavorite() {
    this.movie.isFavorite = !this.movie.isFavorite;

    if (this.movie.isFavorite) {
      this.addFavorite();
    }

    if (!this.movie.isFavorite) {
      this.removeFavorite();
    }

    // after toggling the isFavorite property, save the changes to sessionStorage
    this.movieService.saveFavToSession();
  }

  addFavorite() {
    // check if the movie is already in the favorites array.
    // add movie to favorites array if movie is not already in favorites
    if (!this.checkMovieInFav()) {
      this.movieService.favorites.push(this.movie);
      console.log(this.movieService.favorites.length);
    }

  }

  // method to remove movies from favorites array
  removeFavorite() {
    if (this.checkMovieInFav()) {
      const index = this.movieService.favorites.indexOf(this.movie);
      if (index !== undefined) {
        this.movieService.favorites.splice(index, 1);
        console.log(this.movieService.favorites.length);
      }
    }
  }

  // method to check if a movie is in the favorites array. Returns a boolean
  checkMovieInFav(): boolean {
    const inFavorite = this.movieService.favorites.find(movie => movie.id === this.movie.id);

    if (inFavorite) {
      return true;
    }

    return false;
  }

}

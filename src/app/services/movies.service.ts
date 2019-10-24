import { IMovie } from './../shared/movie.interface';
import { movies } from './../shared/movies';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SessionStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesList: IMovie[];
  favorites: IMovie[] = [];
  moviesData = movies;
  baseUrl = 'https://image.tmdb.org/t/p/w300';
  coverUrl = 'https://image.tmdb.org/t/p/w1280';

  constructor(public session: SessionStorageService) { }

  mapMovies(): Observable<any> {
    return of(movies);
  }

  getMoviesAsync() {
    if (this.session.get('bimflix.fav')) {
      this.favorites = this.session.get('bimflix.fav');
    }

    if (this.session.get('bimflix.movies')) {
      this.moviesList = this.session.get('bimflix.movies');
      return;
    }

    this.mapMovies().subscribe(data => {
      this.moviesList = this.createMoviesList(data);
    });
  }

  createMoviesList(data: []): IMovie[] {

    const moviesList: IMovie[] = [];
    const limitOverview = (text: string): string => {
      if (text.length > 300) {
        return text.slice(0, 300) + '...';
      }

      return text;
    };

    data.forEach((item: any) => {
      const movie: IMovie = {
        title: item.title,
        id: item.id,
        poster: this.baseUrl + item.poster,
        cover: this.coverUrl + item.cover,
        votes: item.averageVotes,
        overview: limitOverview(item.overview),
        year: +item.release.slice(0, 4),
        releaseDate: item.release,
        isFavorite: false
      };

      moviesList.push(movie);
    });

    console.log(moviesList);
    return moviesList;
  }

  saveFavToSession() {
    this.session.set('bimflix.fav', this.favorites);
    this.session.set('bimflix.movies', this.moviesList);
    console.log('saved to session');
  }

}

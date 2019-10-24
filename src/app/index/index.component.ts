import { IMovie } from './../shared/movie.interface';
import { MovieService } from './../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  favorites: IMovie[];
  baseUrl = 'http://image.tmdb.org/t/p/w300';
  constructor(private moviesService: MovieService) {

  }

  movies: any[] = this.moviesService.moviesList;

}

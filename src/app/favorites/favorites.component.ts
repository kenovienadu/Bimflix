import { MovieService } from './../services/movies.service';
import { IMovie } from './../shared/movie.interface';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: IMovie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.favorites = this.movieService.favorites;
  }

}

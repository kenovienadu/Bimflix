import { MovieDetailComponent } from './../movie-detail/movie-detail.component';
import { IMovie } from './../shared/movie.interface';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // movies: IMovie[];
  searchText = '';
  results: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.results = this.movieService.moviesList;
  }

  searchMovies(f: NgForm) {
    const form = f.value;
    this.results = this.movieService.moviesList.filter(movie => {
      const title = movie.title.toLowerCase();
      return title.includes(form.searchText.toLowerCase());
    });
  }

  handle(value: string) {
    this.results = this.movieService.moviesList.filter(movie => {
      const title = movie.title.toLowerCase();
      return title.includes(value.toLowerCase());
    });
  }

}

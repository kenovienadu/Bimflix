import { MovieService } from './../services/movies.service';
import { IMovie } from './../shared/movie.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie;
  imageUrl: string;
  constructor(private moviesService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  getMovieDetail() {
    const id = this.route.snapshot.paramMap.get('id');

    if (this.moviesService.moviesList) {
      return this.movie = this.moviesService.moviesList.find(item => item.id === +id);
    }

    const movies = this.moviesService.getMoviesAsync();
  }
}

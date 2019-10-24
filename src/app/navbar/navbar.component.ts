import { MovieService } from './../services/movies.service';
import { IMovie } from './../shared/movie.interface';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  favorites: IMovie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.favorites = this.movieService.favorites;
  }

}

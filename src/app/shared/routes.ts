import { SearchComponent } from './../search/search.component';
import { MovieDetailComponent } from './../movie-detail/movie-detail.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { FavoritesComponent } from '../favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

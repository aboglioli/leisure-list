import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List, MoviesList } from '../../model';
import { ListService } from '../../shared/services';

@Component({
  selector: 'll-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit, OnDestroy {
  list: MoviesList;
  loading: boolean;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listService: ListService) { }

  ngOnInit() {
    this.loading = true;

    this.subscription = this.route.params.subscribe(params => {
      const listId = params['listId'];

      this.listService.findById(listId).subscribe(list => {
        this.list = new MoviesList(list.name, list.$key);
        this.loading = false;
      });

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addMovies(movies: any[]) {
    movies.forEach(movie => {
      this.list.addElement(movie);
    });

    this.listService.update(this.list);

    this.router.navigate(['lists', 'movies']);
  }

}

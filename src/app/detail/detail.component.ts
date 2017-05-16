import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { TheMovieDbService, LoginService } from '../shared/services';
import { Element } from '../model';

@Component({
  selector: 'll-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  element: Element;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              public movieService: TheMovieDbService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const type = params['type'];
      const elementId = params['id'];

      console.log(type);

      if(type === 'movie') {
        this.movieService.getMovieDetails(elementId).subscribe(element => {
          this.element = element;
        });
      } else if(type === 'tv') {
        this.movieService.getTvDetails(elementId).subscribe(element => {
          this.element = element;
        });
      }

    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}

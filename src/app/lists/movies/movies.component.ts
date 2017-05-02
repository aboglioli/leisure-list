import { Component, OnInit } from '@angular/core';

import { ListService } from '../../shared/services';

@Component({
  selector: 'll-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.listService.getObservable().subscribe(lists => {
      console.log(lists);
    });
  }

}

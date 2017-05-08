import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ListService } from '../../shared/services';

@Component({
  selector: 'll-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  searchControl: FormControl;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.searchControl = new FormControl();

    this.searchControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.search.emit(<string>term);
      });

    this.listService.getObservable().subscribe(_ => {
      this.searchControl.setValue('');
    });
  }

}

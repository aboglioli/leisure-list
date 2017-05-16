import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List, Element } from '../../model';
import { ListService } from '../../shared/services';

@Component({
  selector: 'll-add-elements',
  templateUrl: './add-elements.component.html',
  styleUrls: ['./add-elements.component.scss']
})
export class AddElementsComponent implements OnInit, OnDestroy {
  list: List;
  loading: boolean;

  results: Element[];

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listService: ListService) { }

  ngOnInit() {
    this.loading = true;

    // TODO: params (Observable) should auto-unsubscribe (but it has a bug)
    this.subscription = this.route.params.subscribe(params => {
      const listId = params['listId'];

      this.listService.findById(listId).subscribe(list => {
        this.list = list;
        this.loading = false;
      });

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSearchResults(results: Element[]) {
    // keep selected movies
    this.results = this.results
      ? this.results.filter(result => result.isSelected())
      : [];

    this.results = [
      ...this.results,
      ...results
    ];
  }

  onSelectedElements(elements: Element[]) {
    elements.forEach(element => {
      element.deselect();

      this.list.addElement(element);
    });

    this.listService.update(this.list);

    this.router.navigate(['lists']);
  }

}

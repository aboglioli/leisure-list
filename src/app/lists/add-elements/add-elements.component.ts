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

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listService: ListService) { }

  ngOnInit() {
    this.loading = true;

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

  addElements(elements: Element[]) {
    elements.forEach(element => {
      this.list.addElement(element);
    });

    this.listService.update(this.list);

    this.router.navigate(['lists']);
  }

}

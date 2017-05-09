import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ListService } from '../../shared/services';

@Component({
  selector: 'll-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  newListForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private listService: ListService) { }

  ngOnInit() {
    this.newListForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  createList() {
    this.listService.create(this.newListForm.value.name);
  }

}

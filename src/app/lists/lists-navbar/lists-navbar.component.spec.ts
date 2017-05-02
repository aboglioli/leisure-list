import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsNavbarComponent } from './lists-navbar.component';

describe('ListsNavbarComponent', () => {
  let component: ListsNavbarComponent;
  let fixture: ComponentFixture<ListsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

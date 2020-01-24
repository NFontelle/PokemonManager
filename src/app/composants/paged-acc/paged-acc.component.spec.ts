import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedAccComponent } from './paged-acc.component';

describe('PagedAccComponent', () => {
  let component: PagedAccComponent;
  let fixture: ComponentFixture<PagedAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

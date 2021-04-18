import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaoardToolbarComponent } from './dashbaoard-toolbar.component';

describe('DashbaoardToolbarComponent', () => {
  let component: DashbaoardToolbarComponent;
  let fixture: ComponentFixture<DashbaoardToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaoardToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaoardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

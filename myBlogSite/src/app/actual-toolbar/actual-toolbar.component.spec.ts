import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualToolbarComponent } from './actual-toolbar.component';

describe('ActualToolbarComponent', () => {
  let component: ActualToolbarComponent;
  let fixture: ComponentFixture<ActualToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshersComponent } from './freshers.component';

describe('FreshersComponent', () => {
  let component: FreshersComponent;
  let fixture: ComponentFixture<FreshersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

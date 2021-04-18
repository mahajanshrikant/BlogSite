import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouWriteComponent } from './you-write.component';

describe('YouWriteComponent', () => {
  let component: YouWriteComponent;
  let fixture: ComponentFixture<YouWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWritingComponent } from './resume-writing.component';

describe('ResumeWritingComponent', () => {
  let component: ResumeWritingComponent;
  let fixture: ComponentFixture<ResumeWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

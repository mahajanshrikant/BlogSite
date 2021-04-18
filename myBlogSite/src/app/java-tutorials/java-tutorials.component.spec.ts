import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaTutorialsComponent } from './java-tutorials.component';

describe('JavaTutorialsComponent', () => {
  let component: JavaTutorialsComponent;
  let fixture: ComponentFixture<JavaTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

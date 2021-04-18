import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredPostsComponent } from './sponsored-posts.component';

describe('SponsoredPostsComponent', () => {
  let component: SponsoredPostsComponent;
  let fixture: ComponentFixture<SponsoredPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoredPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

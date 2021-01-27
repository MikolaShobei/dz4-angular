import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsBodyInfoComponent } from './posts-body-info.component';

describe('PostsBodyInfoComponent', () => {
  let component: PostsBodyInfoComponent;
  let fixture: ComponentFixture<PostsBodyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsBodyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsBodyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

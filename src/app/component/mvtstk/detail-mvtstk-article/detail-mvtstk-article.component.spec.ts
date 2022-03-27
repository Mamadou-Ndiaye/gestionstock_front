import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtstkArticleComponent } from './detail-mvtstk-article.component';

describe('DetailMvtstkArticleComponent', () => {
  let component: DetailMvtstkArticleComponent;
  let fixture: ComponentFixture<DetailMvtstkArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtstkArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtstkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

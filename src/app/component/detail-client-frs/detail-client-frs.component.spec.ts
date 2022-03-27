import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientFrsComponent } from './detail-client-frs.component';

describe('DetailClientFrsComponent', () => {
  let component: DetailClientFrsComponent;
  let fixture: ComponentFixture<DetailClientFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClientFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

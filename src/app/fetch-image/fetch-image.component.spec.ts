import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchImageComponent } from './fetch-image.component';

describe('FetchImageComponent', () => {
  let component: FetchImageComponent;
  let fixture: ComponentFixture<FetchImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

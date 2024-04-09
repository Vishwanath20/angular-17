import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExample2Component } from './reactive-form-example-2.component';

describe('ReactiveFormExample2Component', () => {
  let component: ReactiveFormExample2Component;
  let fixture: ComponentFixture<ReactiveFormExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormExample2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

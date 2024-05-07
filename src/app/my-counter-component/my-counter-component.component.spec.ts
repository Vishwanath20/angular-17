import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponentComponent } from './my-counter-component.component';

describe('MyCounterComponentComponent', () => {
  let component: MyCounterComponentComponent;
  let fixture: ComponentFixture<MyCounterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCounterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AngularTestingComponent } from './angular-testing.component';

describe('AngularTestingComponent', () => {
  let component: AngularTestingComponent;
  let fixture: ComponentFixture<AngularTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular-Testing-Component'`, async(() => {
    const fixture = TestBed.createComponent(AngularTestingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to angular-unit-test!');
}));

it(`should have title as H2 tag Angular-Testing-Component`, async(() => {
  const fixture = TestBed.createComponent(AngularTestingComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  console.log(compiled);
  console.log(component.title);
  
  expect(compiled.querySelector('h2').textContent).toContain('Welcome to angular-unit-test!');
}));

});

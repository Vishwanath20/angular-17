import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form-example',
  standalone: true,
  imports: [CommonModule,  FormsModule],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css'
})
export class TemplateDrivenFormExampleComponent {
 
  title = 'Template driven forms';

  countryList:country[] = [
    new country("1", "Pakistan"),
    new country('2', 'UAE'),
    new country('3', 'USA')
  ];

  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }
}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
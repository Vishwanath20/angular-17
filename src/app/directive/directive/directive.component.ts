import { Component } from '@angular/core';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [AttributeDirectiveComponent, CustomDirectiveComponent],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

}

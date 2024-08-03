import { Component } from '@angular/core';
import { CustomDirectiveDirective } from '../../custom-directive.directive';


@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [CustomDirectiveDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}

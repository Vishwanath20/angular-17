import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

  @Input() name: string = 'World';

}

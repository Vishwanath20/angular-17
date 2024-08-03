import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this line

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent{

  isClass1 = true;
  isClass2 = false;

  toggleClass1() {
    this.isClass1 = !this.isClass1;
  }

  toggleClass2() {
    this.isClass2 = !this.isClass2;
  }

  backgroundColorM = 'lightblue';
  fontSize = 14;

  changeColor() {
    this.backgroundColorM = this.backgroundColorM === 'lightblue' ? 'lightgreen' : 'lightblue';
  }

  increaseFontSize() {
    this.fontSize += 2;
  }

  name = '';
  
}

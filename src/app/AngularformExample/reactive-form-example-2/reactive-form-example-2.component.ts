import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray , FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example-2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-example-2.component.html',
  styleUrl: './reactive-form-example-2.component.css'
})
export class ReactiveFormExample2Component {

  creditCardForm!: FormGroup ;
  maskedCreditCard: string | undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creditCardForm = this.formBuilder.group({
      creditCardInput: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]]
    });
  }

  onSubmit(): void {
    const creditCardInputControl = this.creditCardForm.get('creditCardInput');
    if (creditCardInputControl) {
      const creditCardNumber = creditCardInputControl.value;
      this.maskedCreditCard = this.maskCreditCard(creditCardNumber);
    }
  }

  maskCreditCard(creditCardNumber: string): string {
    if (creditCardNumber.length != 16) {
      return "Invalid credit card number";
    }
    let maskedNumber = '';
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < 12) {
        maskedNumber += '*';
      } else {
        maskedNumber += creditCardNumber[i];
      }
      if ((i + 1) % 4 == 0 && i < 15) {
        maskedNumber += '-';
      }
    }
    return maskedNumber;
  }

}
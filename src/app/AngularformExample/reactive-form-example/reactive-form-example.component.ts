import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray , FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    alert('Hello'+this.profileForm.value.firstName );
  }

  profileForm2 = this.formBuilder.group({
    firstName2: ['', Validators.required],
    lastName2: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  onSubmit2() {
    console.log('---onSubmit2---------');  
    console.log(this.profileForm2.value);
  }

  profileFormArray = this.formBuilder.group({
    firstName3: ['', Validators.required],
    lastName3: [''],
    address2: this.formBuilder.group({
      street2: [''],
      city2: [''],
      state2: [''],
      zip2: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileFormArray.get('aliases') as FormArray;
  }
//----------Add new controlers--------
  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit3() {
    console.log('---onSubmit Array---------');  
    console.log(this.profileFormArray.value);
  }
}

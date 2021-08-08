import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female', 'Others']
  signupForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email])
      }),
      'gender': new FormControl('Male')
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}

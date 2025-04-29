import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title="stepper-forms";
  
 

 private fb= new  FormBuilder;

  personalForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname:['',Validators.required],
    });
    contactForm = this.fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    actionForm= this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

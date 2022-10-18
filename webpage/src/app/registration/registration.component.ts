import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ContactForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]),
    email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    city:new FormControl(),
    mobile:new FormControl("",[Validators.pattern("^\d{10}$")]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get username(){
    return this.ContactForm.get('username');
  }
  get password(){
    return this.ContactForm.get('password');
  }
  get email(){
    return this.ContactForm.get('email');
  }
  get city(){
    return this.ContactForm.get('city');
  }
  get mobile(){
    return this.ContactForm.get('mobile');
  }

  SubmitInfo(){
    console.log(this.ContactForm.value)
  }


}

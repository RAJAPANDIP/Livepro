import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  get f(){
    return this.regForm.controls;
  }

  regForm: FormGroup = new FormGroup({
    names: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    eMail: new FormControl('', [Validators.required, Validators.email]),
    street: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl('', Validators.required),
    phone: new FormControl(''),
    webSite: new FormControl(''),
    company: new FormControl('')
  });

  ngOnInit() {
    
  }
  OnCancel() {
    this.regForm.reset(
      {
        names: '',
        userName: '',
        eMail: '',
        street: '',
        city: '',
        zipCode: '',
        phone: '',
        webSite: '',
        company: ''
      });
  }

}
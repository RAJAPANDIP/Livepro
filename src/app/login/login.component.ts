import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  isValid: boolean = false;

  logForm: FormGroup = new FormGroup(
    {
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required)
    }
  );

  get f() {
    return this.logForm.controls;
  }
  ngOnInit() {
    this.logForm.reset({userName: '', passWord: ''});
  }
  onSubmit() {
    this.isValid = true;
    console.log(this.logForm.value);
    this.router.navigate(['home']);
  }

}
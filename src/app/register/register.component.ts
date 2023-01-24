import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = {
    username: '',
    email:'',
    fullname:'',
    password: '',
    confirmpassword:'',
    mobile: '',
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:any) {
    if (form.valid) {
      console.log(form.value);
    }
  }

}

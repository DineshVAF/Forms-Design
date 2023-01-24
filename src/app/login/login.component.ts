import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model={
    username:'',
    password:''
  }

  constructor() { }
  
  ngOnInit(): void {
  }
  onSubmit(form:any) {
     if (form.valid) {
       console.log(form.value);
     }
   }
}

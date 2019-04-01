import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup

  constructor(private fb: FormBuilder, private ls: LoginService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(username, password) {
    this.ls.login(username, password)
  }

  ngOnInit() {
  }

}

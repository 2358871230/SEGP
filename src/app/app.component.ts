import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from './service/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OA 管理系统';

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

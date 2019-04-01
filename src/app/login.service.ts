import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = "http://localhost:18888/login"

  constructor(private http: HttpClient) { }

  login(username, password) {
    const obj = {
      username: username,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'))
  }

}

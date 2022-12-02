import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string = '';
  username: string = '';
  password: string = '';
  error: boolean = false;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.handleToken().subscribe((resp) => this.token = resp.token);
  }

  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password,
      token: this.token,
    };

    this.loginService.handleLogin(loginData).subscribe((resp) => {
      this.error = resp.error
      if(!this.error){
        window.location.href = "https://www.onecause.com/";
      }else{
        this.loginService.handleToken().subscribe((resp) => this.token = resp.token);
      }    
    });

    this.username = '';
    this.password = '';
  }

}

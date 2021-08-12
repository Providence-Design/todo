import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "in30minutes"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  //Router
  //Angular.givemeRouter
  //Dependency Injection

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);
    if(this.username === "in30minutes" && this.password === "dummy"){
      //Redirect to Welcome page
      this.router.navigate(["welcome", this.username])
      this.invalidLogin = false
    }else {
      this.invalidLogin = true
    }
  }

}

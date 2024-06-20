import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLoginGroup! : FormGroup ;
  errorMessage : undefined ;
  constructor(private  fomeBuilder : FormBuilder ,
              private  router : Router,
              private  authservice : AuthService) {
  }
  ngOnInit() {
    this.formLoginGroup = this.fomeBuilder.group({
      username : this.fomeBuilder.control("") ,
      password : this.fomeBuilder.control("") ,
    })
  }

  handelLogin() {

  /*
      console.log(this.formLoginGroup.value) ;
      if(this.formLoginGroup.value.username =="admin" && this.formLoginGroup.value.password=="1234"){
        this.router.navigateByUrl("/admin")
      }
   */

    let username : string = this.formLoginGroup.value.username  ;
    let password : string = this.formLoginGroup.value.password ;
    this.authservice.login(username , password)
      .then(resp =>{
        this.router.navigateByUrl("/admin")
      })
      .catch(error=>{
        this.errorMessage = error ;
      })
  }
}

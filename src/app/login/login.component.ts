import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginasFarmer : boolean = true;
  loginForm !: FormGroup;

  constructor(private router : Router,private fb : FormBuilder,private auth : AuthService,private toast : NgToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email:[''],
      Password:['']
    })
  }
  registerBidder(){
    localStorage.removeItem("isFarmer")
    this.router.navigate(['register'])
  }
  registerFarmer(){
    this.router.navigate(['register'])
    localStorage.setItem("isFarmer","true")!
  }
  changeLoginType(event:any){
    console.log()
    if(event.target.checked){
      this.loginasFarmer = false;

    }else{
      this.loginasFarmer = true;
    }
  }
  login(){
    if(this.loginasFarmer){
      this.auth.loginAsFarmer(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.router.navigate(['home'])
          this.toast.success({detail:'SUCCESS',summary:res.message,position:'tr',duration:5000});
          localStorage.setItem("loggedInAs","farmer")
        },
        error:(err)=>{
          console.log(err)
          this.toast.error({detail:'ERROR',summary:err.error.message,position:'tr',duration:5000})
        }
      })
    }else{
      this.auth.loginAsBidder(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.router.navigate(['bidder-home'])
          this.toast.success({detail:'SUCCESS',summary:res.message,position:'tb',duration:5000});
          localStorage.setItem("loggedInAs","bidder")
        },
        error:(err)=>{
          this.toast.error({detail:'ERROR',summary:err.error.message,position:'tr',duration:5000})
        }
      })
    }
  }

}

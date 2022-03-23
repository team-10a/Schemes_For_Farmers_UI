import { Router } from '@angular/router';
import { BidderModel } from './../models/bidder.model';
import { FarmerModel } from './../models/farmer.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {

  isFarmer: boolean=false;
  Form !: FormGroup;
  farmerObj = new FarmerModel();
  bidderObj = new BidderModel();
  constructor(private fb : FormBuilder, private authService: AuthService,private router : Router, private toast : NgToastService) { }
  ngOnDestroy(): void {
    this.isFarmer = false;
  }

  ngOnInit(): void {
    let farmer = localStorage.getItem("isFarmer")!
    if(farmer==="true"){
      this.isFarmer = true;
    }
    this.Form = this.fb.group({
      FullName : [''],
      Contact : [''],
      Email : [''],
      Address : [''],
      City : [''],
      State : [''],
      Pincode : [''],
      AccountNumber : [''],
      IfscCode : [''],
      AdharCard : [''],
      Pan : [''],
      TraderLicense : [''],
      Password : [''],
      Area : [''],
      LandAddress : [''],
      LandPincode : [''],
    })
  }
  register(){
    if(this.isFarmer){
      this.farmerObj.FarmerFullName = this.Form.value.FullName;
      this.farmerObj.FarmerEmail = this.Form.value.Email;
      this.farmerObj.FarmerContact = this.Form.value.Contact;
      this.farmerObj.FarmerAddress = this.Form.value.Address;
      this.farmerObj.FarmerCity = this.Form.value.City
      this.farmerObj.FarmerState = this.Form.value.State
      this.farmerObj.FarmerPincode = this.Form.value.Pincode
      this.farmerObj.FarmerAccountNumber = this.Form.value.AccountNumber
      this.farmerObj.FarmerIfscCode = this.Form.value.IfscCode
      this.farmerObj.FarmerAdharCard = this.Form.value.AdharCard;
      this.farmerObj.FarmerPan = this.Form.value.Pan
      this.farmerObj.FarmerTraderLicense = this.Form.value.TraderLicense
      this.farmerObj.FarmerPassword = this.Form.value.Password;
      this.farmerObj.FarmerLandArea = this.Form.value.Area;
      this.farmerObj.FarmerLandAddress = this.Form.value.LandAddress;
      this.farmerObj.FarmerLandPincode = this.Form.value.LandPincode;
      this.authService.registerAsFarmer(this.farmerObj)
      .subscribe({
        next:(res)=>{
          this.Form.reset();
          this.router.navigate(['login']);
          this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err.error.message,duration:5000});
        }
      })
    }else{
      this.bidderObj.BidderFullName = this.Form.value.FullName;
      this.bidderObj.BidderEmail = this.Form.value.Email;
      this.bidderObj.BidderContact = this.Form.value.Contact;
      this.bidderObj.BidderAddress = this.Form.value.Address;
      this.bidderObj.BidderCity = this.Form.value.City
      this.bidderObj.BidderState = this.Form.value.State
      this.bidderObj.BidderPincode = this.Form.value.Pincode
      this.bidderObj.BidderAccountNumber = this.Form.value.AccountNumber
      this.bidderObj.BidderIfscCode = this.Form.value.IfscCode
      this.bidderObj.BidderAdharCard = this.Form.value.AdharCard;
      this.bidderObj.BidderPan = this.Form.value.Pan
      this.bidderObj.BidderTraderLicense = this.Form.value.TraderLicense
      this.bidderObj.BidderPassword = this.Form.value.Password;
      this.authService.registerAsBidder(this.bidderObj)
      .subscribe({
        next:(res)=>{
          this.Form.reset();
          this.router.navigate(['login']);
          this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err.error.message,duration:5000});
        }
      })
    }
  }
}

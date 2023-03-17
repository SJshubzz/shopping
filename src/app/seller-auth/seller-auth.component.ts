import { Component, OnInit } from '@angular/core';
import { login, SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private Seller: SellerService) {}
  showLogin = false;
  authEroor:string=''
  ngOnInit(): void {
    this.Seller.reloadSeller();
  }
  signUp(data: SignUp): void {
    // console.warn(data);
    this.Seller.userSignUp(data);
  }
  login(data: SignUp): void {
    this.Seller.userLogin(data)
    this.Seller.isLoginerror.subscribe((isError)=>{
      if(isError){
        this.authEroor="Email or Password dosen't match"
      }
    })
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}

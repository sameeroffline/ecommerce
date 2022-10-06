import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  email:any;
  password:any;
  alert:boolean=false

  login(){
    if(this.email == 'sameer@' && this.password == '123123'){ 
            this.router.navigateByUrl('home')
    }
    else {
      alert("Invalid Email or Password")
    }
  }


}

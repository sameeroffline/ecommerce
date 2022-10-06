import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appleitems:any;
  miitems:any;
  vivoitems:any;
  constructor(private service:MobileService) { }

  ngOnInit(): void {
    this.appleitems=this.service.order1
    this.miitems=this.service.order2
    this.vivoitems=this.service.order3
  }

}

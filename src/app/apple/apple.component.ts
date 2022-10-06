import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';


@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private service:MobileService) { }

  ngOnInit(): void {
    this.appleitems=this.service.order1
    
  }
  // filter:any;
  appleitems:any;

}

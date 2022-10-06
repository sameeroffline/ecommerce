import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-grocery1',
  templateUrl: './grocery1.component.html',
  styleUrls: ['./grocery1.component.css']
})
export class Grocery1Component implements OnInit {

  constructor( private service:MobileService) { }

  grocery1:any;

  ngOnInit(): void {
    this.grocery1=this.service.order4
  }

}

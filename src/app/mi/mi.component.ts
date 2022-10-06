import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.css']
})
export class MiComponent implements OnInit {

  constructor(private  service:MobileService) {}

  ngOnInit(): void {
    this.miitems = this.service.order2
    }

  miitems:any;

}

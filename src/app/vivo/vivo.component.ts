import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.css']
})
export class VivoComponent implements OnInit {

  constructor(private  service:MobileService) { }

  ngOnInit(): void {
    this.vivoitems=this.service.order3
  }

  vivoitems:any;
}

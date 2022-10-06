import { Component, OnInit,   } from '@angular/core';
 

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {

  shoeitems:any;

  constructor() {

   }

  //  private shoedata:MobileService
  //  this.shoedata.shoe().subscribe( data =>{
  //    data = this.shoeitems
  //  })


  ngOnInit(): void {
    
  }

}

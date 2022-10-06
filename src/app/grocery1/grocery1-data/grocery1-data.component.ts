import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-grocery1-data',
  templateUrl: './grocery1-data.component.html',
  styleUrls: ['./grocery1-data.component.css']
})
export class Grocery1DataComponent implements OnInit {

  constructor(private out:ActivatedRoute,private service:MobileService) { }

  ngOnInit(): void {

    this.groceryData1Id = this.out.snapshot.paramMap.get('id');
    if (this.groceryData1Id)
    {
      this.drocerData1 = this.service.order4.filter((value)=>{
        return value.id == this.groceryData1Id;
        
      });
    }
  }
  drocerData1:any;
  groceryData1Id:any;
}

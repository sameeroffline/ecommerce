import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-vivo-data',
  templateUrl: './vivo-data.component.html',
  styleUrls: ['./vivo-data.component.css']
})
export class VivoDataComponent implements OnInit {

  constructor(private out:ActivatedRoute,private service:MobileService) { }


  vivodata:any;
  menuid3:any;
  
  ngOnInit(): void {


    this.menuid3 = this.out.snapshot.paramMap.get('id');
    if (this.menuid3)
    {
      this.vivodata = this.service.order3.filter((value)=>{
        return value.id == this.menuid3;
        
      });
    }

  }

}

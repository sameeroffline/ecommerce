import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-apple-data',
  templateUrl: './apple-data.component.html',
  styleUrls: ['./apple-data.component.css']
})
export class AppleDataComponent implements OnInit {

  constructor(private out:ActivatedRoute,private service:MobileService) { }
  appledata:any;
  menuid1:any;

 

  ngOnInit(): void {
    this.menuid1 = this.out.snapshot.paramMap.get('id');
    if (this.menuid1)
    {
      this.appledata = this.service.order1.filter((value)=>{
        return value.id == this.menuid1;
        
      });
    }
    
  }
   

}

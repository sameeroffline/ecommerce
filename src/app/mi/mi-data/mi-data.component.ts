import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-mi-data',
  templateUrl: './mi-data.component.html',
  styleUrls: ['./mi-data.component.css']
})
export class MiDataComponent implements OnInit {

  constructor(private out:ActivatedRoute,private service:MobileService) { }
   
  midata:any;
  menuid2:any;

  ngOnInit(): void {

    this.menuid2 = this.out.snapshot.paramMap.get('id');
    if (this.menuid2)
    {
      this.midata = this.service.order2.filter((value)=>{
        return value.id == this.menuid2;
        
      });
    }
  }

}

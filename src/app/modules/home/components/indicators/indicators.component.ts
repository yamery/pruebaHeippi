import { Component, OnInit } from '@angular/core';
import { JSONapiService } from '../../../../services/jsonapi.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  constructor(private jsonApiService: JSONapiService) { }

  ngOnInit(): void {
    this.numeroUsuarios();
  }


  userCount:number = 0;
  userTotal:number=0;
  postsCount:number = 0;
  postsTotal:number=0;
  numeroUsuarios(){
    this.jsonApiService.showUsers().subscribe(res =>{this.userTotal=res.length;})
    this.jsonApiService.showPosts().subscribe(res=>{this.postsTotal=res.length;this.activarContadores()})
    }


  activarContadores(){
    let userCountstop:any = setInterval(()=>{
      this.userCount++;
      
      if(this.userCount ==this.userTotal)
      {
        
        clearInterval(userCountstop);
      }
  
    },10) 
    
    let postsCountstop:any = setInterval(()=>{
      this.postsCount++;
      if(this.postsCount == this.postsTotal)
      {
        
        clearInterval(postsCountstop);
      }
    },10)
  }


}

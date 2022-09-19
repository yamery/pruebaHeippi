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

  //this is a variable that hold number
  userCount:number = 0;
  userTotal:number=0;
  postsCount:number = 0;
  postsTotal:number=0;
  numeroUsuarios(){
    this.jsonApiService.showUsers().subscribe(res =>{this.userTotal=res.length;})
    this.jsonApiService.showPosts().subscribe(res=>{this.postsTotal=res.length;this.activarContadores()})
    }

  //we have created setinterval function with arrow function and
  //and set them in a variable that is userCountstop.
  
  activarContadores(){
    let userCountstop:any = setInterval(()=>{
      this.userCount++;
      //we need to stop this at  particular point; will use if condition
      if(this.userCount ==this.userTotal)
      {
        //clearinterval will stop tha function
        clearInterval(userCountstop);
      }
  
    },10) //10 is milisecond you can control it
    
    let postsCountstop:any = setInterval(()=>{
      this.postsCount++;
      if(this.postsCount == this.postsTotal)
      {
        
        clearInterval(postsCountstop);
      }
    },10)
  }


}

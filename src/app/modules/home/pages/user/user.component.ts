import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { JSONapiService } from '../../../../services/jsonapi.service';
import { UserResponse } from '../../../../interfaces/user.interface';
import { PostsResponse } from '../../../../interfaces/post.interface';
import { AlmbumResponse } from '../../../../interfaces/album.interface';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  postsCount:number=0;
  postsTotal:number=0;
  id:string="";
  user:UserResponse={
    id:       0,
    name:     "",
    username: "",
    email:    "",   
    phone:    "",
    website:  "",
  };
  albums:AlmbumResponse[]=[];

  constructor(private activatedRoute: ActivatedRoute, private jsonApiService:JSONapiService) {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.id=params['id'];
        this.getUser(this.id);
        this.getPosts(this.id);
        this.getAlbums(this.id);
      }
    )
  }

  ngOnInit(): void {
  }

  getUser(id:string){
    this.jsonApiService.getUser(id).subscribe(
      (res:UserResponse)=>{
        this.user=res;
        console.log(this.user);
      })
  }

  getPosts(id:string){
    this.jsonApiService.getUserPosts(id).subscribe((res:PostsResponse[])=>{
      this.postsTotal=res.length; 
      this.activarContadores();     
    })
  }

  getAlbums(id:string){
    this.jsonApiService.getUserAlmbums(id).subscribe((res:AlmbumResponse[])=>{
      this.albums=res;
    })
  }

  activarContadores(){
    
    let postsCountstop:any = setInterval(()=>{
      this.postsCount++;
      if(this.postsCount == this.postsTotal)
      {        
        clearInterval(postsCountstop);
      }
    },10)
  }

}

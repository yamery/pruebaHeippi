import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{environment} from '../../environments/environment';
import { PostsResponse } from '../interfaces/post.interface';
import { UserResponse } from '../interfaces/user.interface';
import { AlmbumResponse } from '../interfaces/album.interface';
@Injectable({
  providedIn: 'root'
})
export class JSONapiService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  showUsers(): Observable<UserResponse[]> {
    const url = `${this.apiUrl}users/`;
    return this.http.get<UserResponse[]>(`${url}`);
  }

  showPosts(): Observable<PostsResponse[]> {
    const url = `${this.apiUrl}posts/`;
    return this.http.get<PostsResponse[]>(`${url}`);
  }

  getUser(id:string):Observable<UserResponse>{
    const url = `${this.apiUrl}users/`+id;
    return this.http.get<UserResponse>(`${url}`);
  }

  getUserPosts(id:string):Observable<PostsResponse[]>{
    const url = `${this.apiUrl}users/${id}/posts`;
    return this.http.get<PostsResponse[]>(`${url}`);
  }

  getUserAlmbums(id:string):Observable<AlmbumResponse[]>{
    const url = `${this.apiUrl}users/${id}/albums`;
    return this.http.get<AlmbumResponse[]>(`${url}`);
  }

}


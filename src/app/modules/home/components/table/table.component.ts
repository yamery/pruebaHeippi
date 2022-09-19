import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/user.interface';
import { JSONapiService } from '../../../../services/jsonapi.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private jsonApiService:JSONapiService) { }
  usuarios: UserResponse[]=[];
  ngOnInit(): void {
    this.jsonApiService.showUsers().subscribe((res:UserResponse[])=>{this.usuarios=res})
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { TableComponent } from './components/table/table.component';
import { UserComponent } from './pages/user/user.component';



@NgModule({
  declarations: [
    HomepageComponent,
    IndicatorsComponent,
    TableComponent,
    HomepageComponent,
    IndicatorsComponent,
    TableComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],  
  exports:[HomepageComponent]
})
export class HomeModule { }

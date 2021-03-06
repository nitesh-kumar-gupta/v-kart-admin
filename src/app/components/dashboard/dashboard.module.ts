import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsersComponent } from './users/users.component';
import { ImageCloudModule } from './image-cloud/image-cloud.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    TopnavComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ImageCloudModule
  ]
})
export class DashboardModule { }

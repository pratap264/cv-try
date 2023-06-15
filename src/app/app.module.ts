import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavbarComponent,
    HomePageComponent,
    DashboardComponent,
    GameboardComponent,
    TwoComponent,
    ThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

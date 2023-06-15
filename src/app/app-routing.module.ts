import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'gameboard', component: GameboardComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[ThreeComponent,DashboardComponent,GameboardComponent,TwoComponent,LogInComponent]

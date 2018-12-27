import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: ' ', component: LoginComponent },
  { path: 'weather', component: WeatherComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

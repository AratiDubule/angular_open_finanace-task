import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './myform/myform.component';

const routes: Routes = [
  {path:'', component:MyformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule,MyformComponent  ],
  declarations: [ MyformComponent]
  
})
export class AppRoutingModule { }

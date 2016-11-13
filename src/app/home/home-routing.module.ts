import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'en', component: HomeComponent },
      { path: 'es', component: HomeComponent },
    ])
  ]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/en', pathMatch: 'full' }
    ])
  ],
})
export class AppRoutingModule { }

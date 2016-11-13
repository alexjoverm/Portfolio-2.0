import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { HomeModule } from './home/home.module';
import { TestModule } from './test/test.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouterModule,

    HomeModule,
    TestModule,

    AppRoutingModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode }
  ]

})
export class MainModule {
  constructor() {
  }
}

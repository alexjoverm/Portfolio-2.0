import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
   .active {
     background-color: gray;
     color: white;
   }
  `],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(@Inject('isBrowser') private isBrowser: Boolean) {
    if (isBrowser) {
      console.log('Browser rendered')
    } else {
      console.log('Server rendered')
    }
  }
}

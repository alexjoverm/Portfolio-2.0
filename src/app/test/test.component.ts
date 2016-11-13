import { Component, Inject } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <h3>Rendered from {{isBrowser ? 'BROWSER' : 'SERVER'}}</h3>
    <button (click)="add()">+1</button>
    {{count}}
  `
})
export class TestComponent {
  count = 0

  constructor(@Inject('isBrowser') private isBrowser: Boolean) {
  }

  add() {
    this.count++
  }
}

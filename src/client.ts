// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';

// Angular 2
import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

import { MainModule } from './app/app.browser.module';

const platformRef = platformUniversalDynamic();

const delay = location.pathname === '/test' ? 4000 : 0
setTimeout(() => platformRef.bootstrapModule(MainModule), delay)

// on document ready bootstrap Angular 2
// document.addEventListener('DOMContentLoaded', () => {
  // platformRef.bootstrapModule(MainModule);
// });

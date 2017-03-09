import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';

@Component({
    selector: 'd3-app',
    template: '<h1>Our first Angular {{1 + 1}} component!</h1>',
    bootstrap: [AppComponent]
})

export class AppComponent { }

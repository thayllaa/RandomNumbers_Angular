import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FlowComponent } from './flow/flow.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FlowComponent],
  template: `
    <h1> {{name}} </h1>
    <app-flow></app-flow>
  `,
})
export class App {
  name = 'Random Numbers App';
}

bootstrapApplication(App);

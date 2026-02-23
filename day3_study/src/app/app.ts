import { Component } from '@angular/core';
import { Child1 } from './components/child1/child1';
import { Child2 } from './components/child2/child2';

@Component({
  selector: 'app-root',
  imports: [Child1, Child2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'this is open source track';
}

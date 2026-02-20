import { Component } from '@angular/core';
import { Converter } from './components/converter/converter';
import { RestForm } from './components/rest-form/rest-form';
import { Slider } from './components/slider/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RestForm, Slider, Converter],
})
export class App {}

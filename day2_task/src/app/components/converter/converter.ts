import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  imports: [],
  templateUrl: './converter.html',
})
export class Converter {
  convertCelsiusToFahrenheit(celsiusInput: HTMLInputElement, fahrenheitInput: HTMLInputElement) {
    const celsiusValue = Number(celsiusInput.value);
    if (!Number.isFinite(celsiusValue)) return;

    fahrenheitInput.value = String((celsiusValue * 9) / 5 + 32);
  }

  convertFahrenheitToCelsius(fahrenheitInput: HTMLInputElement, celsiusInput: HTMLInputElement) {
    const fahrenheitValue = Number(fahrenheitInput.value);
    if (!Number.isFinite(fahrenheitValue)) return;

    celsiusInput.value = String(((fahrenheitValue - 32) * 5) / 9);
  }
}

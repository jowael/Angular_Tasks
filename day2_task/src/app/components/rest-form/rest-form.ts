import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rest-form',
  imports: [FormsModule],
  templateUrl: './rest-form.html',
})
export class RestForm {
  fName: string = '';

  onReset() {
    this.fName = '';
  }
}

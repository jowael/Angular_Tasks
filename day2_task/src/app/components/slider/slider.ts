import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
})
export class Slider {
  imagesPaths = ['/images/bg1.png', '/images/bg2.png', '/images/bg3.png'];
  imageIndex = 0;
  SLIDING_DURATION = 2000;
  slidingRef: number | null = null;

  goNext() {
    this.imageIndex = (this.imageIndex + 1) % this.imagesPaths.length;
  }

  goPrevious() {
    this.imageIndex = (this.imageIndex - 1 + this.imagesPaths.length) % this.imagesPaths.length;
  }

  startSliding() {
    if (this.slidingRef) clearInterval(this.slidingRef);

    this.slidingRef = setInterval(() => {
      this.goNext();
    }, this.SLIDING_DURATION);
  }

  stopSliding() {
    if (this.slidingRef) clearInterval(this.slidingRef);
  }
}

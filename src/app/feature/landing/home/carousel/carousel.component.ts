import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images = [
    {
      url: '/assets/img/1.jpg',
      alt: 'Tu carro ideal',
      title: 'Tu carro ideal',
    },
    {
      url: '/assets/img/2.jpg',
      alt: 'Tu carro ideal',
      title: 'Tu carro ideal',
    },
  ];

}

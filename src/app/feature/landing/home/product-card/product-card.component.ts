import { Component, Input } from '@angular/core';
import { CarDto } from '@feature/landing/shared/dto/car.dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  public product!: CarDto;

  viewDetail(): void {
    Swal.fire({
      title: `${this.product.brand} ${this.product.name} ${this.product.model}`,
      imageUrl: this.product.image,
      imageWidth: 900,
      imageHeight: 400,
      html: `
<ul class='list-group list-group-flush'>
  <li class='list-group-item'><b>Tipo de conbustible:</b>${this.product.typeFuel}</li>
  <li class='list-group-item'><b>Cilindraje:</b>${this.product.displacement}</li>
</ul>
      `,
      imageAlt: `${this.product.brand} ${this.product.name} ${this.product.model}`,
    });
  }

}

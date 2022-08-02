import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@feature/landing/shared/service/products.service';
import { CarDto } from '@feature/landing/shared/dto/car.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars: CarDto[] | undefined;
  filterCar: string | undefined;
  readonly FILTER_FIELD = 'make';

  constructor(
    private readonly _productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.getCars();
  }

  async getCars(): Promise<void> {
    this.cars = await this._productsService.getCars();
  }

  setFilterCar(filter: string) {
    this.filterCar = filter;
  }

}

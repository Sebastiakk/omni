import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { CarDto } from '@feature/landing/shared/dto/car.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private readonly http: HttpService,
  ) {
  }

  getCars(): Promise<CarDto[]> {
    return this.http.get<CarDto[]>('/assets/cars.json');
  }
}

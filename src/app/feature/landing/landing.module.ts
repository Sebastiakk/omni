import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '@feature/landing/shared/service/products.service';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    CarouselComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CoreModule,
    HttpClientModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ProductsService],

})
export class LandingModule {
}

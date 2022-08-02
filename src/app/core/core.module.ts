import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '@core/services/http.service';


@NgModule({
  providers: [
    HttpService,
  ],
  imports: [
    CommonModule,
  ],
})
export class CoreModule {
}

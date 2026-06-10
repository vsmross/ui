import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { AddNewHotelComponent } from './add-new-hotel/add-new-hotel.component';
import { CustomElementsModule } from 'src/app/Elements/CustomElements/custom-elements.module';

@NgModule({
  imports: [
    HotelRoutingModule,
    CustomElementsModule,
    CommonModule
  ],
  declarations: [
    AddNewHotelComponent
  ]
})
export class HotelModule { }



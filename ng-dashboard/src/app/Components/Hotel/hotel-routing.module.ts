import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardUser } from 'src/app/Services/Guard/auth.guard.user';
import { ResourceConfig } from 'src/app/Resources/resource';
import { AddNewHotelComponent } from './add-new-hotel/add-new-hotel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'addNewHotel',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: ResourceConfig.Routes.Hotel.Head
    },
    children: [
      {
        path: 'addNewHotel',
        component: AddNewHotelComponent,
        canActivate:[AuthGuardUser],
        data: {
          title: ResourceConfig.Routes.Hotel.AddNewHotel
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }

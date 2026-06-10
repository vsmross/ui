import { Component } from '@angular/core';
import { BaseComponent } from '../../BaseComponent/base-component';
import { BarLoadingService } from 'src/app/Elements/Dashboard/bar-loading/bar-loading.service';
import { BarMessageService } from 'src/app/Elements/Dashboard/bar-message/bar-message.service';

@Component({
  selector: 'app-add-new-hotel',
  templateUrl: './add-new-hotel.component.html',
  styleUrls: ['./add-new-hotel.component.scss']
})
export class AddNewHotelComponent extends BaseComponent {
  constructor(
      barLoadingService:BarLoadingService,
      barMessageService:BarMessageService
   ) {
     super(barLoadingService,barMessageService);
  }

  addLoading(t:boolean){
    this.barLoadingService.loadingStatusEvent(t);
  }
}

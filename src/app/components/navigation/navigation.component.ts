import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NavigationComponent {
  navigationModel: any[];
  navigationModelChangeSubscription: Subscription;


  constructor() {

   }


}



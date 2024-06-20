import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

constructor(protected appStateService : AppStateService) {
}

  totalCheckedProducts() {
  let checkedProducts : Product[] = this.appStateService.productsState.products.filter((p: any)=>p.checked==true)
    return String(checkedProducts.length );
  }
}

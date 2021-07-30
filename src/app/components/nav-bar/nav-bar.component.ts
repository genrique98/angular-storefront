import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  badgeNumber: number = 0
  
  ngOnInit(): void {
    this.badgeNumber = this.cartService.getTotalQuantity()
  }

  // OnChanges():void {
  // }

}

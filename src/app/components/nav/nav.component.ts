import { StoreService } from './../../services/store.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  activeMenu = false;
  counter = 0;
constructor(
  private StoreService: StoreService
){}

ngOnInit(): void{
  this.StoreService.myCart$.subscribe(products =>{
      this.counter = products.length;
    })
  }

 toggleMenu(){
  this.activeMenu= !this.activeMenu;
 }
}

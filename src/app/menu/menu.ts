import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-menu',
 imports: [MatButtonModule, MatMenuModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}

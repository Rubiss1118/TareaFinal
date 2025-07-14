
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.html',
  styleUrl: './tool-bar.css',
   imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolBar {

}

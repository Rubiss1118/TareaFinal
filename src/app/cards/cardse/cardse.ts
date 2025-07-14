
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cardse',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cardse.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cardse.css'
})
export class Cardse {
  

}

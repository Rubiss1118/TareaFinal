import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
// ... otras importaciones de componentes ...

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    NgFor,
    MatToolbarModule, 
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    // ... otros componentes ...
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Ejercicios Angular');
  
  menuItems = [
    { name: 'Botón', path: '/button', icon: 'smart_button' },
    { name: 'Calendario', path: '/calendario', icon: 'calendar_today' },
    { name: 'Cards', path: '/cards', icon: 'credit_card' },
    { name: 'Checkbox', path: '/check', icon: 'check_box' },
    { name: 'Chips', path: '/chips', icon: 'loyalty' },
    { name: 'Divider', path: '/divider', icon: 'horizontal_rule' },
    { name: 'Autocomplete', path: '/autocomplete', icon: 'text_fields' },
    { name: 'Menú', path: '/menu', icon: 'menu' },
    { name: 'Panel', path: '/panel', icon: 'dashboard' },
    { name: 'Progress', path: '/progress', icon: 'hourglass_top' },
    { name: 'Sheet', path: '/sheet', icon: 'table_chart' },
    { name: 'Slider', path: '/slider', icon: 'tune' },
    { name: 'Tabla', path: '/tabla', icon: 'table_rows' },
    { name: 'Toolbar', path: '/toolbar', icon: 'space_dashboard' },
    { name: 'Tree', path: '/tree', icon: 'account_tree' }
  ];
}
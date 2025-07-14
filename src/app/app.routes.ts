import { Routes } from '@angular/router';
import { ButtonOverviewExample } from "./ButtonOverviewExample/button-overview-example/button-overview-example";
import { Calendario } from "./calendario/calendario";
import { Cardse } from "./cards/cardse/cardse";
import { Check } from "./Check/check/check";
import { Chips } from "./chips/chips";
import { Divider } from "./divider/divider";
import { MatAutocomplete } from "./mat-autocomplete/mat-autocomplete/mat-autocomplete";
import { Menu } from "./menu/menu";
import { Panel } from "./panel/panel";
import { Progress } from "./progress/progress";
import { Sheet } from "./sheet/sheet";
import { SLIDER } from "./slider/slider";
import { Tabla } from "./Tabla/tabla/tabla";
import { ToolBar } from "./Toolbar/tool-bar/tool-bar";
import { Tree } from "./tree/tree";

export const routes: Routes = [
  { path: 'button', component: ButtonOverviewExample },
  { path: 'calendario', component: Calendario },
  { path: 'cards', component: Cardse },
  { path: 'check', component: Check },
  { path: 'chips', component: Chips },
  { path: 'divider', component: Divider },
  { path: 'autocomplete', component: MatAutocomplete },
  { path: 'menu', component: Menu },
  { path: 'panel', component: Panel },
  { path: 'progress', component: Progress },
  { path: 'sheet', component: Sheet },
  { path: 'slider', component: SLIDER },
  { path: 'tabla', component: Tabla },
  { path: 'toolbar', component: ToolBar },
  { path: 'tree', component: Tree },
  { path: '', redirectTo: '/button', pathMatch: 'full' } // Ruta por defecto
];
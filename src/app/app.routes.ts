import { Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './Components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosIndexComponent } from './Components/gastos-index/gastos-index.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GastosIndexComponent },
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
];

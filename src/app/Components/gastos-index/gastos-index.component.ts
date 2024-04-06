import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { ListarGastoComponent } from './listar-gasto/listar-gasto.component';
import { IngresarGastoComponent } from './ingresar-gasto/ingresar-gasto.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos-index',
  standalone: true,
  imports: [ListarGastoComponent, IngresarGastoComponent],
  templateUrl: './gastos-index.component.html',
  styleUrl: './gastos-index.component.css',
})
export class GastosIndexComponent {
  constructor(
    private _presupuestoservice: PresupuestoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this._presupuestoservice.presupuesto === 0) {
      this.router.navigate(['ingresarPresupuesto']);
    }
  }
}

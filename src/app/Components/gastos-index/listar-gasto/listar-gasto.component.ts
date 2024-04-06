import { Component } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  standalone: true,
  imports: [],
  templateUrl: './listar-gasto.component.html',
  styleUrl: './listar-gasto.component.css',
})
export class ListarGastoComponent {
  constructor(private _presupuestoService: PresupuestoService) {
    this._presupuestoService.getGastos().subscribe((data) => {
      console.log(data);
    });
  }
}

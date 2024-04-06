import { Component } from '@angular/core';
import { ListarGastoComponent } from '../listar-gasto/listar-gasto.component';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css',
})
export class IngresarGastoComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = 'Nombre Gasto o Cantidad Incorrecta';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  agregarGasto() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Cantidad supera Restante';
      return;
    }

    if (this.cantidad > 0 && this.nombreGasto !== '') {
      //Crear Objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      };
      //enviar Objeto

      this._presupuestoService.agregarGasto(GASTO);

      //Reseteamos Formulario
      this.formularioIncorrecto = false;
      this.cantidad = 0;
      this.nombreGasto = '';
    } else {
      this.formularioIncorrecto = true;
    }
  }
}

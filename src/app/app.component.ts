import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IngresarGastoComponent } from './Components/gastos-index/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './Components/gastos-index/listar-gasto/listar-gasto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    IngresarGastoComponent,
    ListarGastoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Gastos-app';
}

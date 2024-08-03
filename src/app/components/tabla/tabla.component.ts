import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  producto: any;
  servicioP = inject(ProductoService)
  ngOnInit() {
    this.servicioP.getProductos().subscribe(p => {
      this.producto = p
    })
  }
}


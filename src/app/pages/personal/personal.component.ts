import { Component, inject } from '@angular/core';
import { PersonalService } from '../../service/personal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

// constructor(private service : PersonalService){}

  personal:any

  servicio = inject(PersonalService)
  ngOnInit(){
    this.servicio.getPersonal().subscribe( p => { 
      console.log(p);
      this.personal = p
    })
  }
}

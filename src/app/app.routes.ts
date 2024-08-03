import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
{path: "", component: HomeComponent},
{path: "personal", component: PersonalComponent},
{path: "producto", component: ProductoComponent},
{path: "**", redirectTo:"", pathMatch: 'full'}
];

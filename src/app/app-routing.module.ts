import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';



const routes: Routes = [
  { path: 'pokedex', loadChildren: () => import("./pokedex/pokedex.module").then(modulo => modulo.PokedexModule) },
  { path: 'login', component:AuthenticationComponent},
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

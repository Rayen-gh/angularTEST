import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : "add", component:AddComponent},
  {path : "show", component:ShowComponent},
  {path:'', redirectTo:'/add' ,pathMatch:'full'},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

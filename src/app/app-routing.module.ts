import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ARSceneComponent } from './arscene/arscene.component';


const routes: Routes = [
  {path: '', component:ARSceneComponent},
  {path: 'arscene', component:ARSceneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

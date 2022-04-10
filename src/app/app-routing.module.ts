import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDragDropComponent } from './test-drag-drop/test-drag-drop.component';

const routes: Routes = [

  {path:"",component:TestDragDropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

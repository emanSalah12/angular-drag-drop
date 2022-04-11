import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkDragComponent } from './cdk-drag/cdk-drag.component';
import { TestDragDropComponent } from './test-drag-drop/test-drag-drop.component';

const routes: Routes = [

  {path:"",component:TestDragDropComponent},
  {path:"cdk",component:CdkDragComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

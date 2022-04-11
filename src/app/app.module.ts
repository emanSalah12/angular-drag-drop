import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDragDropComponent } from './test-drag-drop/test-drag-drop.component';
import { CdkDragComponent } from './cdk-drag/cdk-drag.component';

@NgModule({
  declarations: [
    AppComponent,TestDragDropComponent, CdkDragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DragulaModule.forRoot(),
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

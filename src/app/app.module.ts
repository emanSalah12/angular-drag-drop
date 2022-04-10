import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDragDropComponent } from './test-drag-drop/test-drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,TestDragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DragulaModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

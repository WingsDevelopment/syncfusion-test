import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentEditorContainerModule, DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocumentEditorContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

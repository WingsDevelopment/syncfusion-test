import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorComponent, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolbarService]
})
export class AppComponent implements OnInit {
  @ViewChild('documentEditorDefault', { static: true }) 
  container: DocumentEditorContainerComponent;
  documentEditor: DocumentEditorComponent;
 
  saveAsDocx() :void {
    // this.container.documentEditor.save('sample','Docx');
    this.documentEditor.save('sample','Docx');
  }
  title = 'synchack';
  ngOnInit(): void {
  }
}

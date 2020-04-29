import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preview-app';
  url:string;
  pdf_protected:number;

  previewPdf() {
    this.pdf_protected = 0;
    this.url = 'http://www.africau.edu/images/default/sample.pdf';
    // this.url = 'https://www.montclair.edu/media/montclairedu/oit/documentation/whatsnewinoffice20072003/Understanding_Views.pdf';
  }
  previewDoc() {
    this.pdf_protected = 0;
    this.url = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';
  }
  previewPdfProtected() {
    this.pdf_protected = 1;
    this.url = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';
  }
}

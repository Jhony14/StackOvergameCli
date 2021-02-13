import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  userList: any = [];
  public page: number;

  constructor(public service: SharedService) { }

  ngOnInit(): void {
    console.log(this.service.getToken());
    this.refreshUser();
  }

  refreshUser() {
    this.service.getUsuarioList().subscribe(data => {
      this.userList = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  public downloadPDF(): void {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_informe.pdf`);
    });
  }

}

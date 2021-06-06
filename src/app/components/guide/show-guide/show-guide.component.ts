import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-show-guide',
  templateUrl: './show-guide.component.html',
  styleUrls: ['./show-guide.component.css']
})
export class ShowGuideComponent implements OnInit {

  PostId: number;
  PostData: any = [];

  constructor(public service: SharedService, public router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.PostId = +this.activatedroute.snapshot.paramMap.get('id');
    this.refreshNews();
  }

  refreshNews() {
    this.service.getGuide(this.PostId).subscribe(data => {
      this.PostData = data;
      console.log(data)
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

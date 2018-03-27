import { DataShareService } from 'app/common/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private shareService: DataShareService) { }

  ngOnInit() {
  }

}

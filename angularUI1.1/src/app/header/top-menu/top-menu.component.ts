import { DataShareService } from 'app/common/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private shareService: DataShareService) { }

  ngOnInit() {
  }

}

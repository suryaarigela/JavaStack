import { Component, OnInit } from '@angular/core';
import { DataShareService } from "app/common/data-share.service";
import { ConstantsService } from "app/common/constants.service";

@Component({
  selector: 'app-screening-body',
  templateUrl: './screening-body.component.html',
  styleUrls: ['./screening-body.component.css']
})
export class ScreeningBodyComponent implements OnInit {

  constructor(
    private shareService: DataShareService,
    private constantsService: ConstantsService) { }

  ngOnInit() {
  }

}

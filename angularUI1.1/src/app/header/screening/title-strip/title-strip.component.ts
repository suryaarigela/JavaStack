import { Component, OnInit } from '@angular/core';
import { DataShareService } from "app/common/data-share.service";
import { ConstantsService } from "app/common/constants.service";

@Component({
  selector: 'app-title-strip',
  templateUrl: './title-strip.component.html',
  styleUrls: ['./title-strip.component.css']
})
export class TitleStripComponent implements OnInit {

  constructor(private shareService: DataShareService, private constantsService: ConstantsService) { }

  ngOnInit() {
  }

}

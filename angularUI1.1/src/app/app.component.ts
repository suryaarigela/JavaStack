import { DataShareService } from 'app/common/data-share.service';
import { ApiManager } from 'app/common/api-manager.service';
import { ConstantsService } from './common/constants.service';


import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IB';
  public constructor(private titleService: Title, private dataShareService: DataShareService, private constantsService: ConstantsService, private apiManager: ApiManager) {
    this.titleService.setTitle(this.title);

    apiManager.fetchData("lookUpsUrl", undefined, ApiManager.JSONFILE, undefined).subscribe((res: Response) => {
      constantsService.setLookups(res);
    })
  }

}

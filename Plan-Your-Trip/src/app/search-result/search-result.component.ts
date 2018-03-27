import { List } from './../list.class';
import { Onwardflight } from './../onwardFlight.class';
import { RootObject } from './../root.class';
import { BusSearchService } from './../bus-search.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

 subscription: Subscription;
  results: any;
   list:List[];
  showDetail=false;
root:RootObject;
  constructor(private service: BusSearchService) {
    this.subscription = BusSearchService.results$.subscribe(results => {
      this.results = results;
      console.log("results in Search ",this.results)
    })
  }

  ngOnInit() {
   var retrievedObject = localStorage.getItem('testObject');
   this.root= JSON.parse(retrievedObject);
console.log('retrievedObject: ', this.root.data.onwardflights);
  }

  changeMe(onward: Onwardflight){
    this.list=onward.BPPrims.list;
   this.showDetail=true;
  }
  changeDiv(){
    console.log('inside Change div')
     this.showDetail=false;
  }

}

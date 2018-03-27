import { Root } from './../root.model';
import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {
loadedCharacter: {};
character:Root;
bgColor:string;
prevValue:number=0;
currValue:number=0;
  constructor(private myService : MyServiceService,private http: HttpClient) { }

   ngOnInit() {
  /**  this.myService.getCharacter().subscribe(character => {
     this.myService.getPlanet(character.homeworld).subscribe(planet => {
     //   this.character.homeworld = homeworld;
        console.log(planet.name)
      });
    }); */

     Observable.interval(200 * 60).subscribe(x => {
    this.callBitCoinAPI();
  });
  }

   callBitCoinAPI(){
     console.log('******************Calling*********************')
      this.myService.getBitCoinDetails().subscribe(
        bitcoin=>{this.currValue=bitcoin.usd;
        console.log(bitcoin);
        }
        );
      let cal=0;
      cal=this.currValue-this.prevValue;
      this.prevValue=this.currValue;
      console.log("difference of amounts during period "+cal);
   }
}

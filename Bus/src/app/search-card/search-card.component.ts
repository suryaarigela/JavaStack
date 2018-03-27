import { RootObject } from './../root.class';
import { BusSearchService } from './../bus-search.service';
import { SearchCardInterface } from './searchCard.class';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  model: SearchCardInterface;
  busForm:FormGroup;
root:RootObject;
loading=false
  constructor(private _fb: FormBuilder , private busService :BusSearchService, private router: Router) { }

  ngOnInit() {
    //this.model = {tripType: 0, origin: 'Bangalore', destination: 'Hyderabad', departureDate: new Date(),
    //arrivalDate: new Date()};

       this.busForm = this._fb.group({
       tripType: new FormControl(0,Validators.required),
       origin: new FormControl('',Validators.required),
       destination: new FormControl('',Validators.required),
       departureDate: new FormControl('',Validators.required),
       arrivalDate: new FormControl(''),
    });
  }



  letsGo(){
    this.loading=true;
    console.log('########## inside letsGo method')
      this.busService.getSearchResults({
     'tripType': this.busForm.get('tripType').value,
      'origin':  this.busForm.get('origin').value,
      'destination':  this.busForm.get('destination').value,
      'departureDate':  this.busForm.get('departureDate').value,
      'arrivalDate':  this.busForm.get('arrivalDate').value
    }) .subscribe(
      result => {

        localStorage.setItem('testObject', JSON.stringify(result.json()));
        this.loading=false;
      // this.root = result.json().data;
        console.log("*********Root*****************", result.json());
      this.router.navigate(['/results']);
      },
      error => {
        console.log('error happends');
      }
      );
      console.log('########## calling router')
     // this.router.navigate(['/results']);
  }
}

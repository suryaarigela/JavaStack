import { Component, OnInit } from '@angular/core';
// Additions start
export class SearchCardInterface {
  constructor(tripType: string,
  origin: string,
  destination: string,
  departureDate: Date,
  arrivalDate: Date){

  }
  tripType: string;
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
}
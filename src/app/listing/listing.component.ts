import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from '../services/db.service';
import { IPerson } from '../interfaces/iperson';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';  

import { PagerService } from '../services/pager.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  @Output() modifyClicked = new EventEmitter<any>();

  baseURL = 'https://first-project-c0645.firebaseio.com';
  rootNode = 'people';

  peopleCollection: Array<IPerson> = [];

  constructor(private dbservice: DbService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() { 
     this.dbservice.getAllData(`${this.baseURL}/${this.rootNode}.json`)
     .subscribe(
       (response) => {
         this.peopleCollection = response;
        } ,
       (error) => console.log(error)
     );
  }

  modifyData(dataID) {
    // console.log(dataID);
    this.modifyClicked.emit(dataID);
  }

//-----------------------------------------------------




//-----------------------------------------------------
}

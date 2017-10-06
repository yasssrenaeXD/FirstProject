import { Component, OnInit } from '@angular/core';
import { DbService} from '../services/db.service';
import { IPerson } from '../interfaces/iperson';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {
  baseURL = 'https://first-project-c0645.firebaseio.com';
  rootNode = 'people';
  dataCollection: IPerson[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  addNameEntry(dataForm: NgForm) {
    const person = {
      firstName: dataForm.value.fname,
      lastName: dataForm.value.lname
    }
    this.dbService.saveData(`${this.baseURL}/${this.rootNode}.json`, person)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

  saveData(data: object) {
      return this.http.post('https://first-project-c0645.firebaseio.com/people.json', data);
  }

  getData() {
      return this.http.get('https://first-project-c0645.firebaseio.com/people.json')
      .map(
        (response: Response) => {
            const data = response.json();
            return data;
        }
      )
      .catch(
        (error: Response) => {
            return Observable.throw('There was something wrong in the retrieval of the data...');
        }
      );
  }

}

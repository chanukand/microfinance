import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsuServiceService {

  csu = [];
  constructor(private _http: Http) { }


  addCsu(info) {
    return this._http.post('http://localhost/api/insert.php', info);
  }
}

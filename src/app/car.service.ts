import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarBrandName(itemDescription: any): void {
    return itemDescription;
  }

  getData() {
    return this.http.get('assets/data.json');
  }

}

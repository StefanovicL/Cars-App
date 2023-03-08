import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
// import carData from '../../assets/data.json';

// interface Car {
//   carBrandLogoUrl: String;
//   carBrandName: String;
//   countryFlagUrl: String;
//   carBrandDescription: String;
//   productionDate: String;
//   horsePowerMax: Number;
//   horsePowerMin: Number;
//   fuelType: Number;
//   usageType: Number;
// }

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]
})
export class CarListComponent implements OnInit {
  
  constructor(private carService: CarService) {}
  // Jedan od nacina takodje za dohvatanje podataka
  // cars: Car[] = carData;

  cars: any;

  getCarBrandName(itemDescription: any): void {
    return itemDescription;
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

  ngOnInit(): void { 
    this.carService.getData().subscribe(cars => {
      this.cars = cars;
    });
  }
}
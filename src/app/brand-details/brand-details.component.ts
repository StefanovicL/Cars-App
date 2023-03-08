import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import carData from '../../assets/data.json';
import { ActivatedRoute, ParamMap } from '@angular/router'

interface Car {
  carBrandLogoUrl: String;
  carBrandName: String;
  countryFlagUrl: String;
  carBrandDescription: String;
  productionDate: String;
  horsePowerMax: Number;
  horsePowerMin: Number;
  fuelType: Number;
  usageType: Number;
}

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css'],
  providers: [CarService]
})
export class BrandDetailsComponent implements OnInit {

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  cars: Car[] = carData;
  name: any;
  car: any;
  
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.car = this.cars.find(car => car.carBrandName == this.name);
  }
}
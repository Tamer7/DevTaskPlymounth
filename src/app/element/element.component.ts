import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import Elements from '../../assets/periodicElements.json';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  public position!: number;
  Data : PeriodicElement[] = Elements;

  // We define a variable that holds any type
  public PeriodicData:any = {}




  constructor(private location: Location, private route: ActivatedRoute) {
    // Pull position from route
		this.route.paramMap.subscribe((params) => {
      this.position = parseInt(params.get('position')!, 10)

    });
  }

  ngOnInit(): void {
    // We simply find the item in the json file with the position from the url
    // and assign it to the variable
    this.PeriodicData = this.Data.find(item => item.position === this.position)    
  }

  //In this component, we would like you to display all the selected element's data
  //This should be - position, name, weight and symbol

  goBack():void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Elements from '../../assets/periodicElements.json';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = Elements;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public displayedColumns!: string[];
  public dataSource!: PeriodicElement[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'details'];
    this.dataSource = ELEMENT_DATA;
  }

  onElementClick(position: any): void {
    this.router.navigate(['/element', position]);
  }
}

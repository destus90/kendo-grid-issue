import { Component } from '@angular/core';
import {products} from './products';
import {SelectableSettings} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gridData: any[] = products;
  public selectedIds = [2, 10];

  constructor() {}

  get settings(): SelectableSettings {
    return {checkboxOnly: true, mode: 'multiple'}
  }
}

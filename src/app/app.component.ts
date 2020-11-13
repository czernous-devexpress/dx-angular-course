/* eslint-disable import/prefer-default-export */
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import { Component } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  store: CustomStore;
  dataSource: DataSource;

  title = 'DX-TEST-APP';

  catchInput = '';

  countries: { id: number, name: string }[] = [
    {id: 0, name: 'Albania'},
    {id: 1, name: 'Armenia'},
    {id: 2, name: 'Belarus'},
    {id: 3, name: 'Bahrain'},
    {id: 4, name: 'Canada'},
    {id: 5, name: 'Cambodia'}
  ]
  constructor() {
    this.store = new CustomStore({
        load: () => {
           return this.countries;
            
        },

    })
    this.dataSource = new DataSource({
        store: this.store,

    });
  }
}



import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: any;

  context: any;

  productSource: any;

  products: any[];

  isPopupVisible = false;

  constructor() {
    this.dataSource = new DataSource({
      store: {
        type: 'odata',
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Categories',
        key: 'CategoryID',
        keyType: 'Edm.Int32',
        version: 4,
        jsonp: true,
      },
      paginate: false,
      expand: ['Products'],
      map: (item) => {
        return {
          Products: item.Products,
          ProductQty: item.Products.length,
          CategoryName: item.CategoryName,
          CategoryID: item.CategoryID,
        };
      },
    });
    this.productSource = new DataSource({
      load: () => {
        return this.products;
      },
      map: (item) => {
        return {
          ProductName: item.ProductName,
          QuantityPerUnit: item.QuantityPerUnit,
          UnitsInStock: item.UnitsInStock,
        };
      },
    });
  }

  onBarClick(e: any) {
    const bar = e.target;
    if (bar.isSelected()) {
      bar.clearSelection();
      this.isPopupVisible = false;
    } else {
      console.log(bar.data.Cat);
      this.products = bar.data.Products;
      this.productSource.reload();
      bar.select();
      this.isPopupVisible = true;
    }
  }
}

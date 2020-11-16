import { Component, enableProdMode, ViewChild } from '@angular/core';


import { Service, Employee } from './app.service';
import { DxDataGridComponent } from "devextreme-angular";


@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Service]
})
export class AppComponent {
    employees: Employee[];

    columnVisible: boolean =  false;

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }
    calculateCellValue(data) {
        return [data.Title, data.FirstName, data.LastName].join(" ");
    }
    @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

    getZip(rowIndex, dataField) {
        this.dataGrid.instance.cellValue(rowIndex, dataField);
        alert(`Mr. Heart's Zip code is ${this.dataGrid.instance.cellValue(rowIndex, dataField)}`);
    }

    toggleVisibility() {
        !this.columnVisible ? this.columnVisible = true : this.columnVisible = false
    }
}

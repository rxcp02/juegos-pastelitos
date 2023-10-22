import { Component } from '@angular/core';
import ideasData from '../../../assets/data.json';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  tableData: any = ideasData.ideas;
  constructor() {
    console.log(this.tableData);
  }
}

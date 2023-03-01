import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HFullScreen from "highcharts/modules/full-screen";
HFullScreen(Highcharts);

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
  Highcharts = Highcharts;
  chartOptions ={};

  ngOnInit(): void {
   this.chartOptions={
    chart: {
      type: 'column'
    },
    title: {
      text: 'CHART2',
      align:'center'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
    }]
  }

  }
}

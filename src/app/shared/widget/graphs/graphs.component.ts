import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-spline-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  //Highcharts = Highcharts;
constructor(public httpService:HttpClient){}
  public arrSales = [];
  public chartOptions: any = {
      chart: {
        scrollablePlotArea: {
          minWidth: 700
        }
      },

      exporting: {
        enabled: false
      },

      title: {
        text: null
      },

      credits: {
        enabled: false
      },

      xAxis: [{
        type: 'datetime',
        labels: {
          align: 'left',
          format: '{value:01 %b %Y}'
        },
       // tickInterval: 30 * 24 * 3600 * 1000,
        title: {
          text: 'Date'
        },
        tickLength: 0
      }
      ],

      yAxis: [{
        //alignTicks: true,
        title: {
          text: 'Values (UOM)'
        },
        min: 1.0,
        tickInterval: 0.1,
        max: 2.0,
        labels: {
          formatter: function () {
            return this.value == 1.0 ? '0' : this.value
          }
        },
        lineWidth: 1,
        showFirstLabel: true,
        offset: 70
      }, {
        //linkedTo: 0,
        //alignTicks: true,
        title: {
          text: null
        },
        min: 0,
        tickInterval: 5,
        max: 100,
        labels: {
          formatter: function () {
            return this.value + '%';
          }
        },
        lineWidth: 1,
        showFirstLabel: false,
        offset: 0
      }, {
        //linkedTo: 1,
        //gridLineWidth: 0,
        //alignTicks: true,

        opposite: true,
        title: {
          text: null
        },
        min: 0,
        tickInterval: 25,
        max: 500,
        labels: {
          formatter: function () {
            return this.value + ' kW';
          }
        },
        lineWidth: 1,
        showFirstLabel: false,
        offset: 0
      }
      ],
      legend: {
        verticalAlign: 'bottom'
      },

      plotOptions: {
        series: {
          marker: {
            enabled: false
          },
          label: {
            enabled: false
          }
        }
      },

      series: [
        {
          type: 'spline',
          data:[]
        }
      ],
      colors: ['#87CEFA','#00cc00','#669900'],
    };


    ngOnInit () {
      // DYNAMIC

      this.httpService.get('./assets/chart-data.json', {responseType: 'json'}).subscribe(
        data => {
          this.arrSales = data as any[];
          //console.log(this.arrSales);   // populate array with json.
          this.showChart();         // show the chart.
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }

    showChart () {
      this.chartOptions.series = this.arrSales;       // assign data to the series.
      Highcharts.chart('div-container', this.chartOptions);    // Update the chart.
    }
  }



import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-splinegraph',
  templateUrl: './splinegraph.component.html',
  styleUrls: ['./splinegraph.component.scss']
})
export class SplinegraphComponent {

  chartOptions: {};

  Highcharts = Highcharts;

  ngOnInit(): void {


  this.chartOptions  = {
        chart : {
           type: 'spline'
        },
        title : {
           text: 'Spline Chart'
        },
        // subtitle : {
        //    text: 'October 6th and 7th 2009 at two locations in Vik i Sogn, Norway'
        // },
        // xAxis : {
        //    type: 'datetime',
        //    labels: {
        //       overflow: 'justify'
        //    }
        // },
        // yAxis : {
        //    title: {
        //       text: 'Wind speed (m/s)'
        //    },
        //    min: 0,
        //    minorGridLineWidth: 0,
        //    gridLineWidth: 0,
        //    alternateGridColor: null,
        //    plotBands: [
        //       { // Light air
        //          from: 0.3,
        //          to: 1.5,
        //          color: 'rgba(68, 170, 213, 0.1)',
        //          label: {
        //             text: 'Light air',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       },
        //       { // Light breeze
        //          from: 1.5,
        //          to: 3.3,
        //          color: 'rgba(0, 0, 0, 0)',
        //          label: {
        //             text: 'Light breeze',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       },
        //       { // Gentle breeze
        //          from: 3.3,
        //          to: 5.5,
        //          color: 'rgba(68, 170, 213, 0.1)',
        //          label: {
        //             text: 'Gentle breeze',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       },
        //       { // Moderate breeze
        //          from: 5.5,
        //          to: 8,
        //          color: 'rgba(0, 0, 0, 0)',
        //          label: {
        //             text: 'Moderate breeze',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       },
        //       { // Fresh breeze
        //          from: 8,
        //          to: 11,
        //          color: 'rgba(68, 170, 213, 0.1)',
        //          label: {
        //             text: 'Fresh breeze',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       },
        //       { // Strong breeze
        //          from: 11,
        //          to: 14,
        //          color: 'rgba(0, 0, 0, 0)',
        //          label: {
        //             text: 'Strong breeze',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       },
        //       { // High wind
        //          from: 14,
        //          to: 15,
        //          color: 'rgba(68, 170, 213, 0.1)',
        //          label: {
        //             text: 'High wind',
        //             style: {
        //                color: '#606060'
        //             }
        //          }
        //       }
        //    ]
        // },
        tooltip : {
           valueSuffix: ' m/s'
        },
        exporting:{
          enabled:true,
        },
        credits:{
          enabled:false,
        },
        plotOptions : {
           spline: {
              lineWidth: 4,
              states: {
                 hover: {
                    lineWidth: 5
                 }
              },
              marker: {
                 enabled: false
              },
              pointInterval: 3600000, // one hour
              pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
           }
        },
        series : [
           {
              name: 'Vik i Sogn',
              data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                 7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 10.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                 8.2, 8.5, 9.4, 8.1, 10.9, 15.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                 7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                 3.0, 3.0]
           },
           {
              name: 'Norway',
              data: [15.0, 7.0, 10.0, 9.0, 8.0, 6.0, 5.0, 4.0, 4.1, 4.0, 3.3, 2.0,
                 1.0, 5.4, 7.0, 8.1, 9.0, 11.0, 1.0, 4.8, 5.4, 6.7, 8.8, 3.0,
                 2.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                 3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
           }
        ],
        navigation : {
           menuItemStyle: {
              fontSize: '10px'
           }
        }
     };
     HC_exporting(Highcharts);
   }
  }

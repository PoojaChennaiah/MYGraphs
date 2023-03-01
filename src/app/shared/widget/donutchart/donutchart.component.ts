import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.scss']
})
export class DonutchartComponent {

  chartOptions: {};

  Highcharts = Highcharts;

   pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());


  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'CHART3',
          align: 'center'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: this.pieColors,
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                  distance: -50,
                  filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 4
                  }
              }
          }
      },
      credits:{
        enabled:false
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'Chrome', y: 74.03 },
              { name: 'Edge', y: 12.66 },
              { name: 'Firefox', y: 4.96 },
              { name: 'Safari', y: 2.49 },
              { name: 'Internet Explorer', y: 2.31 },
              { name: 'Other', y: 3.398 }
          ]
      }]
  }

    }
}



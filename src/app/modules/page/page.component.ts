import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {


  combarr = [];
  constructor(public HttpService: HttpClient) { }
  Highcharts = HighCharts;
  public chartOptions: any = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: '',
      align: 'left'
    },
    xAxis: [{
      categories: ['Jan2022', 'Feb2022', 'Mar2022', 'Apr2022', 'May2022', 'Jun2022',
        'Jul2022', 'Aug2022', 'Sep2022', 'Oct2022', 'Nov2022', 'Dec2022'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}%',
        style: {
          color: this.Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: this.Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: 'Precipitation',
        style: {
          color: this.Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value} mm',
        style: {
          color: this.Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    credits: {
      enabled: false
    },
    legend: {
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 80,
      floating: true,
      backgroundColor:
        this.Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
    },
    series: [{
      data: []
    }]
  }

  ngOnInit(): void {
    this.HttpService.get('./assets/pagedata.json', { responseType: 'json' }).subscribe(
      data => {
        this.combarr = data as any[];
        this.showchart();
      }
    )

  }
  showchart() {
    this.chartOptions.series = this.combarr;
    HighCharts.chart('div-container', this.chartOptions);
  }

}

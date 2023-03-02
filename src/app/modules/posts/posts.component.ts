import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  Highcharts = Highcharts;
  constructor(public httpService:HttpClient){}
  public chartarr=[];
  public chartOptions: any = {
    chart: {
      type: 'column'
    },
    exporting: {
      enabled: false
    },

    credits: {
      enabled: false
    },

    title: {
      text: null
    },
    xAxis: {
      categories: ['2021/22', '2020/21', '2019/20', '2018/19', '2017/18']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Assists'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    series: [
      {
        data:[]
      }
    ],
    colors:['#D2AF02','#18C6DB','#0B75C8'],
  }

  ngOnInit(): void {
    this.httpService.get('./assets/columnarry.json',{responseType:'json'}).subscribe(
      data=>{
        this.chartarr= data as any[];
        this.showcharts();
      }
    )
  }
  showcharts(){
      this.chartOptions.series=this.chartarr;
      Highcharts.chart('div-container',this.chartOptions);
  }
}
  // Highcharts = Highcharts;
  // chartOptions ={};

  // ngOnInit(): void {
  //  this.chartOptions={
  //   chart: {
  //       type: 'column'
  //   },
  //   exporting: {
  //       enabled: false
  //   },

  //   credits: {
  //       enabled: false
  //   },

  //   title: {
  //       text: null
  //   },
  //   xAxis: {
  //       categories: ['2021/22', '2020/21', '2019/20', '2018/19', '2017/18']
  //   },
  //   yAxis: {
  //       min: 0,
  //       title: {
  //           text: 'Assists'
  //       }
  //   },
  //   tooltip: {
  //       pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
  //       shared: true
  //   },
  //   plotOptions: {
  //       column: {
  //           stacking: 'normal'
  //       }
  //   },
  //   series: [{
  //       name: 'Type 1',
  //       data: [100, 100, 50, 100, 100]
  //   }, {
  //       name: 'Type 2',
  //       data: [0, 100, 75, 50, 75]
  //   }, {
  //       name: 'Type 3',
  //       data: [25, 75, 75, 25, 75]
  //   }]

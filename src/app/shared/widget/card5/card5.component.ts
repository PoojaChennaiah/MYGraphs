import { Component,OnInit,Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.scss']
})
export class Card5Component implements OnInit{

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;


  chartOptions ={};
  Highcharts = HighCharts;
  ngOnInit(): void {
    this.chartOptions={
      chart: {
          type: 'area',
          backgroundColor:null,
          borderWidth:0,
          margin:[5,2,2,2],
          height:60
      },
      title: {
          text: null,
      },
      subtitle: {
          text: null,
      },

      tooltip: {
         split:true,
         outside:true,
      },
      legend:{
        enabled:false,
      },
      credits:{
        enabled:false,
      },
     exporting:{
      enabled:false,
     },
     xAxis:{
      labels:{
        enabled:false,
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[],
     },
     yAxis:{
      labels:{
        enabled:false,
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[],
     },
      series: [{
        data:[71,78,39,66]
    }]
  }
  }
}

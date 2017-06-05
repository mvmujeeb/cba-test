import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'weather-chart',
  styleUrls: ['./chart.component.css'],
  template: `<chart [options]="options"></chart>`
})


export class ChartComponent implements OnInit {
  @Input() public weatherDataList; 
  private hours: number[] = [];
  private temp: string[] = [];
  private humidity: string[] = [];
 public options;
  constructor() {
      
  }
  public ngOnInit(){
   
      this.weatherDataList.forEach(weather => {
          this.humidity.push(weather.humidity);
          this.temp.push(weather.temp);
          let dt:Date = new Date( weather.temp)
          this.hours.push(dt.getHours());
  });

   console.log(this.humidity,this.temp,this.hours)
      this.options = {
    chart: {
        type: 'spline',
        height:'150px',
        width:'500',
        spacing: [0, 0, 0, 0],
        backgroundColor:'#000'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    
    xAxis: {
        categories: this.hours
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },

    series: [ {
       
        data: [{
            y: 3.9,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            }
        }, this.temp]
    }]
};
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.scss'],
})
export class SpendingsComponent implements OnInit {
  x;
  y;
  public lineChartData: ChartDataSets[] = [
    { data: [0, 600, 400, 800, 400, 600, 200, 800, 400], label: 'Spendings' },
  ];
  public lineChartLabels: Label[] = [
    '0',
    '0.25',
    '0.5',
    '0.75',
    '1',
    '1.25',
    '1.5',
    '1.75',
    '2',
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: '#6b5b95',
      backgroundColor: 'aqua',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit(): void {}

  public chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      console.log(e);
      console.log(activePoints);
      if (activePoints.length > 0) {
        this.x = (activePoints[0]._model.x as number).toFixed(2);
        this.y = (activePoints[0]._model.y as number).toFixed(2);
      }
    }
  }
}

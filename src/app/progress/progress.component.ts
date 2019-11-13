import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  public lineChartDataWeight: ChartDataSets[] = [
    {
      data: [
        67.7,
        67.3,
        67.1,
        66.9,
        66.75,
        66.55,
        66.45, // Week 1
        66.3,
        66.2,
        66.15,
        66,
        65.8,
        65.6,
        65.45, // Week 2
        65.3,
        65.2,
        65.1,
        65.05,
        64.9,
        65.05,
        64.7, // Week 3
        64.55,
        64.45,
        64.4,
        64.3,
        64.25,
        64.2,
        64.2, // Week 4
        64.1,
        64
      ]
    }
  ];
  public lineChartDataSteps: ChartDataSets[] = [
    {
      data: [
        4238,
        4499,
        4499,
        4680,
        4515,
        4003,
        4989,
        4797,
        4183,
        4923,
        4702,
        4180,
        4608,
        4318,
        4159,
        5352,
        4322,
        4787,
        4867,
        4852,
        4550,
        4057,
        4569,
        4953,
        4425,
        4498,
        3947,
        4224,
        4514,
        4614,
        4346
      ]
    }
  ];
  public lineChartDataPerimeter: ChartDataSets[] = [
    {
      data: [
        80,
        77.5,
        76,
        75,
        74,
        73,
        72,
        71.5,
        70.75,
        70,
        69.6,
        69.1,
        68.5,
        67.9,
        67,
        66.3,
        65.7,
        65.3,
        64.9,
        64.3,
        63.7,
        63.2,
        62.8,
        62.3,
        61.7,
        61.3,
        60.7,
        60.4,
        60.2,
        60
      ]
    }
  ];
  public lineChartLabels: Label[] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'];
  public lineChartOptionsWeight = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 70,
          min: 60
        }
      }]
    }
  };
  public lineChartOptionsSteps = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 6000,
          min: 3500
        }
      }]
    }
  };
  public lineChartOptionsPerimeter = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 85,
          min: 55
        }
      }]
    }
  };
  public lineChartDataApnea: ChartDataSets[] = [
    {
      data: [
        5,
        6,
        6,
        6,
        8,
        8,
        8,
        9,
        10,
        10,
        12,
        12,
        14
      ]
    }
  ];
  public lineChartDataFmax: ChartDataSets[] = [
    {
      data: [
        5,
        6,
        6,
        6,
        8,
        8,
        8,
        9,
        10,
        10,
        12,
        12,
        14
      ]
    }
  ];

  public lineChartLabelsHypo: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];
  public lineChartOptionsApnea = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 14,
          min: 0
        }
      }]
    }
  };
  public lineChartOptionsFmax = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 85,
          min: 55
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,255,0.3)',
    }
  ];

  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit() {
  }

}

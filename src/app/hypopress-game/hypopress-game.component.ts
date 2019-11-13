import { Component, OnInit, HostBinding, AfterViewChecked } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationMetadata
  // ...
} from '@angular/animations';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export class BalloonAnimation {
  /**
   *
   * @param nameTrigger Name of triggers
   * @param signal Biometric signal values
   */
  SetTrigger(nameTrigger: string, signal: number[][]): any {
    let metaDataStates: AnimationMetadata[] = [];
    let metaDataTransitions: AnimationMetadata[] = [];
    const maxX: number = signal[signal.length - 1][0];
    let i = 0;
    while (i < signal.length - 1) {
      const posX = (signal[i][0] / maxX) * (1024 / 12) * 10.5;
      const posY = (signal[i][1] / 1) * -100;
      metaDataStates.push(
        state(
          `animation${i}`,
          style({
            transform: `translateX(${posX}%) translateY(${posY}%)`
          })
        )
      );
      metaDataTransitions.push(transition(`animation${i} => animation${i + 1}`, animate('500ms')));
      i++;
    }
    return trigger(nameTrigger, [...metaDataStates, ...metaDataTransitions]);
  }
}
@Component({
  selector: 'app-hypopress-game',
  templateUrl: './hypopress-game.component.html',
  styleUrls: ['./hypopress-game.component.scss'],
  animations: [
    new BalloonAnimation().SetTrigger('move', [
      [0.1, 0.0],
      [0.5, 0.6],
      [1, 0.55],
      [1.5, 0.5],
      [2, 0.45],
      [2.5, 0.4],
      [3, 0.3],
      [3.5, 0.2],
      [4, 0.1],
      [4.5, 0.6],
      [5, 0.55],
      [5.5, 0.5],
      [6, 0.45],
      [6.5, 0.4],
      [7, 0.3],
      [7.5, 0.2],
      [8, 0.1],
      [8.5, 0.0],
      [9, 0.0],
      [9.5, 0.0],
      [10, 0.0],
      [10.5, 0.0],
      [11, 0.0],
      [11.5, 0.0],
      [12, 0.0],
      [12.5, 0.0],
      [13, 0.6],
      [13.5, 0.55],
      [14, 0.5],
      [14.5, 0.45],
      [15, 0.4]
    ])
  ]
})
export class HypopressGameComponent implements OnInit {

  public lineChartDataApnea: ChartDataSets[] = [
    { data: [] }
  ];
  public lineChartDataEmg: ChartDataSets[] = [
    { data: [] }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps: 10,
          stepValue: 0.2,
          max: 1,
          min: 0
        }
      }]
    }
  };
  public lineChartColorsApnea: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    }
  ];
  public lineChartColorsEmg: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,255,0.3)',
    }
  ];

  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  moveStatusControl = 'animation0';
  moveCount = 0;
  signalApnea;
  signalEmg;
  constructor() { }

  ngOnInit() {
    this.signalApnea = [
      [0, 0.0],
      [0.5, 0.6],
      [1, 0.55],
      [1.5, 0.5],
      [2, 0.45],
      [2.5, 0.4],
      [3, 0.3],
      [3.5, 0.2],
      [4, 0.1],
      [4.5, 0],
      [5, 0.6],
      [5.5, 0.55],
      [6, 0.5],
      [6.5, 0.45],
      [7, 0.4],
      [7.5, 0.3],
      [8, 0.2],
      [8.5, 0.1],
      [9, 0.0],
      [9.5, 0.0],
      [10, 0.0],
      [10.5, 0.0],
      [11, 0.0],
      [11.5, 0.0],
      [12, 0.0],
      [12.5, 0.0],
      [13, 0.0],
      [13.5, 0.6],
      [14, 0.55],
      [14.5, 0.5],
      [15, 0.45]
    ];
    this.signalEmg = [
      [0, 0],
      [0.5, 5],
      [1, 3],
      [1.5, 1],
      [2, 2],
      [2.5, 4],
      [3, 5],
      [3.5, 4],
      [4, 1],
      [4.5, 0],
      [5, 6],
      [5.5, 5],
      [6, 5],
      [6.5, 4],
      [7, 4],
      [7.5, 3],
      [8, 2],
      [8.5, 1],
      [9, 90],
      [9.5, 88],
      [10, 86],
      [10.5, 85],
      [11, 88],
      [11.5, 91],
      [12, 89],
      [12.5, 86],
      [13, 61],
      [13.5, 6],
      [14, 5],
      [14.5, 5],
      [15, 4]
    ];
  }

  updateMoveStatusControl() {
    if (this.moveCount === 0) {
      this.lineChartLabels = [];
      this.lineChartDataApnea[0].data = [];
      this.lineChartDataEmg[0].data = [];
      setTimeout(() => {
        const movement = setInterval(() => {
          this.lineChartLabels.push((this.signalApnea[this.moveCount][0]) + 's');
          this.lineChartDataApnea[0].data.push(this.signalApnea[this.moveCount][1]);
          this.lineChartDataEmg[0].data.push(this.signalEmg[this.moveCount][1] / 100);
          this.moveCount++;
          if (this.moveCount === 30) {
            clearInterval(movement);
            this.moveCount = 0;
          }
          this.moveStatusControl = `animation${this.moveCount}`;
        }, 500);
      }, 1000);
    }
  }

  printSignalPoint() {
    const posX = (this.signalApnea[this.moveCount][0] / this.signalApnea[this.signalApnea.length - 1][0]) * 100;
    const posY = -(this.signalApnea[this.moveCount][1] / 1) * 100;
    return `(${posX}%, ${posY}%)`;
  }

  calcPos(height: number, index: number) {
    const top = 85 - height * 5 + '%';
    const left = 45 + index * 5 + '%';
    let ret: any = {
      top: top,
      left: left
    };
    if (this.moveCount > 0) {
      const delay = index + 8.25 + 's';
      ret = {
        top: top,
        left: left,
        'animation-delay': delay
      };
    }
    return ret;
  }

  calculateColor() {

  }
}

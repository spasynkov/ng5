import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('30ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('30ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  goals = [];
  goalText = '';
  itemsCount: number;

  btnText = 'Add an item';

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.initGoals();
  }

  private initGoals() {
    /*this._data.getGoals()                         // getting goals from data.service
      .subscribe(res => this.goals = res);   // setting this goal to be equal one from a data.service*/

    this.goals = this._data.getGoals();
    this.itemsCount = this.goals.length;
    // this._data.changeGoal(this.goals);    // what's happening here??
  }

  addItem() {
    if (this.goalText) {
      this._data.add(this.goalText);  // updating goals in data.service
      this.goalText = '';
    }
  }

  removeItem(i) {
    this._data.removeByIndex(i);    // updating goals in data.service
    this.initGoals();
  }

}

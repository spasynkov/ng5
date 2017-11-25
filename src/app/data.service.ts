import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  // private goals = new BehaviorSubject<any>(['The initial goal', 'I want to climb a mountain']);
  private goals = ['The initial goal', 'I want to climb a mountain'];

  constructor() { }

  getGoals() {
    // return this.goals.asObservable();
    return this.goals;
  }

  add(goal: string) {
    // this.goals.value.push(goal);
    this.goals.push(goal);
  }

  removeByIndex(goalIndex) {
    // this.goals.value.splice(goalIndex, 1);
    this.goals.splice(goalIndex, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';   /*getting rote params*/
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':leave', stagger('30ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1}),
            style({opacity: .5}),
            style({opacity: 0}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _data: DataService) {

    this.route.params.subscribe(res => console.log(res.id + ' / ' + res.username));
  }

  ngOnInit() {
    // this._data.getGoals().subscribe(x => this.goals = x);
    this.goals = this._data.getGoals();
  }

  removeGoal(index) {
    this._data.removeByIndex(index);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
